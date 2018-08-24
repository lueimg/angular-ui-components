import { FormControl, ControlContainer, Validators, NG_VALUE_ACCESSOR,
    ControlValueAccessor, FormGroup, FormBuilder } from '@angular/forms';
import { Component, ViewContainerRef, forwardRef, OnInit, Input,
    ElementRef, EventEmitter, Output, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, Inject } from '@angular/core';
/**
 * https://github.com/jkuri/ng2-datepicker
 */
import { DOBValidator } from './validators/dob.validator';
import { CalendarDate } from './calendar-date.model';
import { maxDateValidator } from './validators/max-date.validator';
import { minDateValidator } from './validators/min-date.validator';
import { OnDestroy } from '@angular/core';
import { ViewFormatValidator } from './validators/ViewFormat.validator';
import { UiInputComponent } from '@simplywell/ui-input';
import * as moment_ from 'moment';
import { Subscription } from 'rxjs/Subscription';
import { DOCUMENT } from '@angular/platform-browser';

const moment = moment_;

export const CALENDAR_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-forward-ref
    useExisting: forwardRef(() => UiDatePickerComponent),
    multi: true
};

@Component({
    moduleId: 'module.id',
    selector: 'ui-datepicker',
    templateUrl: './ui-datepicker.component.html',
    styleUrls: ['./ui-datepicker.component.scss'],
    providers: [CALENDAR_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiDatePickerComponent implements ControlValueAccessor, OnInit, OnDestroy {

    removeListener: () => void;
    addListener: () => void;
    yearSelectSub: Subscription;
    maxYear: number = moment().year();
    controlSub: Subscription;
    textInputSub: Subscription;
    textInput: FormControl;
    yearSelectCtrl: FormControl;
    @Input() position: string;
    @Input() class: string = ''; // danger, warning , success , austin
    @Input() idSelector: string;
    @Input() locationPosition = 'not-fixed'; // fixed | not-fixed
    @Input() locationPositionID: string; // one , two
    @Input() expanded: boolean;
    @Input() opened: boolean;
    @Input() format = 'MM/DD/YYYY';
    @Input() viewFormat = 'MM/DD/YYYY';
    @Input() firstWeekdaySunday = true;
    @Input() maxDate: Date | moment_.Moment;
    @Input() minDate: Date | moment_.Moment;
    @Input() initDate: Date;
    @Input() label: string;
    @Input() futureYears: number;
    @Input() formControlName: string;
    @Input() displayErrorMessages = false;
    @Input() todayButton = false;
    @Input() displayInput = true;
    @Input() showExample = false;
    @Input() todayLabel = 'Today';
    @Input() shrinkErrorSpace = false;
    @Input() selectRange = false;
    // For UiInputComponent
    @Input() autofocus = false;
    @Input() required = false;
    @Input() clearIcon = false;
    @Input() checkIcon = false;
    // For UiIcon
    @Input() calendarIconName = 'icon-date-time_calendar';

    @Output('change') change: EventEmitter<any> = new EventEmitter();

    @ViewChild('inputElement') inputElement: UiInputComponent;

    control: FormControl;
    datePattern: RegExp = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/; // 12/30/2018
    yearForm: FormGroup;
    startDate: any = false;
    endDate: any = false;
    years: Array<{ name: number}>= [];
    date: moment_.Moment = moment(); // moment.Moment
    el: Element;
    viewDate: string | moment_.Moment = null; // string | moment.Moment
    days: CalendarDate[] = [];
    // Positioning
    calPosTop = '';
    calPosLeft = '';

    initialWrite = true;

    constructor(viewContainerRef: ViewContainerRef,
                private elRef: ElementRef,
                private controlContainer: ControlContainer,
                private cdr: ChangeDetectorRef,
                @Inject(DOCUMENT) private document: Document,
                private formBuilder: FormBuilder) {
        this.el = viewContainerRef.element.nativeElement;
    }

    initializeValues () {
        this.opened = this.opened || false;
        this.format = this.format || 'MM/DD/YYYY';
        this.viewFormat = this.viewFormat || 'MM/DD/YYYY';
        this.firstWeekdaySunday = this.firstWeekdaySunday || false;
    }

    createLazylistener () {
        this.addListener = () => {
            const listenerFn = (event: MouseEvent) => {
                if (!this.elRef.nativeElement.contains(event.target)) {
                    this.close();
                    this.cdr.detectChanges();
                }
            };
            this.document.addEventListener('click', listenerFn );
            this.removeListener = () => this.document.removeEventListener('click', listenerFn);
        };
    }

    setBodyClickListener () {
        this.createLazylistener();
    }

    ngOnInit() {
        this.control = this.controlContainer.control.get(this.formControlName) as FormControl;
        this.generateYears();
        this.buildForm();
        this.initializeValues();

        setTimeout(() => {
            // Legacy code
            // ! Use a formControlName value instead
            if (this.initDate) {
                this.date = moment(this.initDate);
            }

            if (this.maxDate) {
                if (this.date.isAfter(this.maxDate)) {
                    this.date = moment(this.maxDate);
                }
            }
            if (this.minDate) {
                if (this.date.isBefore(this.minDate)) {
                    this.date = moment(this.minDate);
                }
            }
            this.generateCalendar();
        });

        this.setBodyClickListener();
    }

    generateYears() {
        this.maxYear = this.maxDate ? moment(this.maxDate).year() : moment().year();
        const minYear = this.minDate ? moment(this.minDate).year() : 1900;
        for (let year = this.maxYear; year > minYear - 1; year--) {
            this.years.push({ name: year });
        }
        // If we have futureYears number we must create those for the years drop down list
        if (this.futureYears && this.futureYears > 0) {
            for (let i = 1; i <= this.futureYears; i++) {
                this.maxYear = moment().add(i, 'year').year();
                this.years.unshift({name: this.maxYear});
            }
            // this.years.sort();
            // this.years.reverse();
        }
    }

    get value(): any {
        return this.viewDate;
    }

    // ! Avoid this.value = ...;
    // ! Use : this.propagateToUiInput(date: Moment);
    // It can be Moment , String, or Object { start, date}
    // * String with format from this.format
    set value(value: any) {
        if (this.initialWrite && value) {
            const date = (value instanceof moment) ? value : moment(value, this.format);
            this.viewDate = date.format(this.viewFormat);
        } else {
            this.viewDate = moment(value, this.format).format(this.viewFormat);
        }

        if (value) {
            if (this.selectRange && this.endDate) {
                this.date = moment(this.endDate);
            } else {
                this.date = moment(value, this.format);
            }
        }

        this.initialWrite = false;
        this.updateYearSelect();
        this.generateCalendar();
        this.onChangeCallback(value); // Moment.format(this.format): string;
        this.cdr.detectChanges();
    }
    /**
     * @param value Can be:
     * String: with the format form @Input() format = "MM/DD/YYYY" by default
     * Moment or Date Instance
     */
    writeValue(value: string | moment_.Moment | Date) {
        if (!this.initialWrite && !value) {
            this.yearForm.reset();
            return;
        }
        const newInputValue = (typeof value === 'string') ?
            moment(value, this.format) : moment(value);

        this.propagateToUiInput(newInputValue);
    }

    propagateToUiInput (date: moment_.Moment) {
        if (date.isValid()) {
            this.textInput.setValue(date.format(this.viewFormat));
        }
    }

    buildForm() {
        this.yearForm = this.formBuilder.group({
            yearSelect: [this.date.year()],
            textInput: ['']
        });
        this.yearSelectCtrl = this.yearForm.get('yearSelect') as FormControl;
        this.textInput = this.yearForm.get('textInput') as FormControl;
        this.setValidators();
        this.inputChangesListener();

        this.yearSelectSub = this.yearSelectCtrl.valueChanges.subscribe((value) => {
            this.onYearChange(value);
        });
    }

    setValidators () {
        const validators = [];
        validators.push(ViewFormatValidator(this.viewFormat));

        if (this.maxDate) {
            const maxDate = moment(this.maxDate).toDate();
            validators.push(maxDateValidator(maxDate));
        }
        if (this.minDate) {
            const minDate = moment(this.minDate).toDate();
            validators.push(minDateValidator(minDate));
        }
        this.yearForm.get('textInput').setValidators(validators);
    }

    inputChangesListener () {
        /**
         * textInput receives a string with this.viewformat;
         * Use : this.propagateToUiInput(date : Moment) instead of this.value directly to allow propagate values in the ui-input
         * e.g. this.selectDate() , this.selectToday(), writeValue()
         *
         * Flow on select a date by calendar :
         * ** SelectDate() >> propagateToUiInput() >> textInput.valueChanges() >> set Value() >> this.onChangeCallback(value);
         *
         * ** selectToday() >> propagateToUiInput() >> textInput.valueChanges() (format)
         *    >> set Value() >> this.onChangeCallback(value) (format);
         *
         * Flow on Change date by input :
         * ** textInput.valueChanges() >> set value () >> this.onChangeCallback(value);
         */
        this.textInputSub = this.textInput.valueChanges.subscribe((inputValue: string) => { // String with this.viewformat;
            const newValue = moment(inputValue, this.viewFormat).format(this.format);
            if (this.textInput.invalid || inputValue === 'Invalid date' || newValue === 'Invalid date') {
                this.clearDatepickerValues();
                return;
            }
            this.value = newValue; // Moment.format(this.format): string;
        });

        // Datepicker can have custom Validators, so We need to update the ui-input with error from the parent
        this.controlSub = this.control.statusChanges.subscribe((datepickerStatus) => {
            if (!this.textInput.errors && this.control.errors) {
                this.textInput.setErrors(this.control.errors);
            }
        });
    }

    clearDatepickerValues () {
        this.onChangeCallback(null);
        // Default date on ui-input Error
        this.date = this.maxDate ? moment(this.maxDate) : moment();
        if (this.textInput.errors) {
            this.controlContainer.control.get(this.formControlName).setErrors(this.textInput.errors);
        }
    }

    generateCalendar() {
        const date = moment(this.date);
        const month = date.month();
        const year = date.year();
        let n = 1;
        const firstWeekDay: number = (this.firstWeekdaySunday) ?
            date.date(2).day() : date.date(1).day();

        if (firstWeekDay !== 1) {
            n -= (firstWeekDay + 6) % 7;
        }

        this.days = [];
        const selectedDate = moment(this.viewDate as string, this.viewFormat);
        for (let i = n; i <= date.endOf('month').date(); i += 1) {
            const currentDate = moment(`${i}.${month + 1}.${year}`, 'DD.MM.YYYY');
            const today = (moment().isSame(currentDate, 'day')
                && moment().isSame(currentDate, 'month')
                && moment().isSame(currentDate, 'year')) ? true : false;

            let selected;

            if (this.selectRange && this.value) {
                if (this.value.startDate || this.value.endDate ) {
                    selected = (moment(this.value.startDate).isSame(currentDate, 'day'))
                        || (moment(this.value.endDate).isSame(currentDate, 'day')) ? true : false;
                }
            } else {
                selected = (selectedDate.isSame(currentDate, 'day')) ? true : false;
            }
            const clickable = this.isClickable(currentDate);

            if (i > 0) {
                this.days.push({
                    day: i,
                    month: month + 1,
                    year,
                    enabled: true,
                    today,
                    clickable,
                    selected
                });
            } else {
                this.days.push({
                    day: null,
                    month: null,
                    year: null,
                    enabled: false,
                    today: false,
                    clickable: false,
                    selected: false
                });
            }
        }
    }

    isClickable(clickedDate: moment_.Moment) {
        if (this.maxDate && clickedDate.isAfter(this.maxDate) || this.minDate && clickedDate.isBefore(this.minDate)) {
            return false;
        }

        return true;
    }

    selectToday() {
        const today = moment();
        // Init update flow: propagateToUiInput() >> Input valueChanges >> set value >> onChangeCallback
        this.propagateToUiInput(today);
        this.yearSelectCtrl.setValue(today.year());
        this.close();
        this.setFocusOnInput();
    }

    selectDate(e: MouseEvent, i: number, isClickable: boolean) {
        if (isClickable) {
            e.preventDefault();
            const date: CalendarDate = this.days[i];
            const selectedDate = moment(`${date.day}.${date.month}.${date.year}`, 'DD.MM.YYYY');
            if (this.selectRange) {
                if (this.startDate === false) {
                    this.startDate = selectedDate;
                } else {
                    this.endDate = selectedDate;
                    this.value = {
                        startDate: this.startDate.format(this.format),
                        endDate: this.endDate.format(this.format)
                    };
                    this.startDate = false;
                    this.endDate = false;
                    this.close();
                    this.generateCalendar();
                }
            } else {
                this.propagateToUiInput(selectedDate);
                this.close();
                this.generateCalendar();
            }
            date.selected = true;
        }

        this.setFocusOnInput();
    }

    setFocusOnInput () {
        if (this.inputElement) {
            // Input is dirty only after modify it manually
            // so we need to mark it as dirty on first selectDate or click on today button
            this.textInput.markAsDirty();
            this.inputElement.setFocus();
        }
    }

    onYearChange(value: number) {
        this.date = this.date.year(value);
        this.generateCalendar();
    }

    prevMonth() {
        const year = this.date.year();
        const minYear = this.minDate ? moment(this.minDate).year() : 1900;
        if (year === minYear && this.date.month() === 0) {
            // do nothing
        } else {
            this.date = this.date.subtract(1, 'month');
            if (this.date.month() === 11) {
                this.yearForm.get('yearSelect').setValue(this.date.year());
            }
            this.generateCalendar();
        }
    }

    nextMonth() {
        const nextDate = this.date.clone().add(1, 'month');
        const yearHasChanged = nextDate.month() === 0;

        if (this.maxDate) {
            const maxDate = moment(this.maxDate);
            const exceededYear = nextDate.year() > maxDate.year();
            const exceededMonthInYear = maxDate.year() === nextDate.year() && nextDate.month() > maxDate.month();

            if (exceededYear || exceededMonthInYear) {
                return false;
            }
        }

        this.date = nextDate;
        if (yearHasChanged) {
            this.updateYearSelect();
        }
        this.generateCalendar();
    }

    updateYearSelect () {
        const yearInList = this.years.some((year) => {
            return year.name === this.date.year();
        });

        if (!yearInList) {
            this.years.unshift({ name: this.date.year()});
            this.years.sort((b, a) => a.name - b.name); // Desc
        }
        this.yearForm.get('yearSelect').setValue(this.date.year());
    }

    open() {
        this.opened = true;
    }

    close() {
        this.opened = false;
        if (this.removeListener) {
            this.removeListener();
        }
    }

    toggle($event: MouseEvent) {
        const { width: calWidth, height: calHeight } =
            document.querySelector('.ui-calendar-cal-container').getBoundingClientRect();

        const ClickPositionY = $event.clientY;
        const viewportHeight = window.innerHeight;
        const CalendarHeight = calHeight;
        const bottomSpace = viewportHeight - ClickPositionY;
        // Use mouse event position, getBoundingClientRect inconsistent

        if (bottomSpace < CalendarHeight) {
            this.calPosTop = (ClickPositionY - CalendarHeight + 20) + 'px';
        } else {
            this.calPosTop = ($event.clientY + 20) + 'px';
        }
        if ($event.clientX < calWidth) {
            this.calPosLeft = ($event.clientX) + 'px';
        } else {
            this.calPosLeft = ($event.clientX - calWidth) + 'px';
        }
        if (window.screen.width < 768) {
            this.calPosLeft = '40px';
        }

        // Fix Datepicker field when It is into the modal
        // this.fixTransformIssueWithPositionFixed();

        this.opened = !this.opened;
        if (this.opened) {
            this.addListener();
            this.generateCalendar();
        }
    }

    fixTransformIssueWithPositionFixed() {
        const modal = document.querySelector('.ui-modal.active');
        const datepickerParenteElement = document.getElementsByClassName('ui-modal-dialog')[0];
        console.log('*** datepickerParenteElement: ', datepickerParenteElement);
        console.log('*** modal: ', modal);
        if (modal) {
            const { top, left } = datepickerParenteElement.getBoundingClientRect();
            this.calPosTop = (+this.calPosTop.replace('px', '') - top) + 'px';
            this.calPosLeft = (+this.calPosLeft.replace('px', '') - left) + 'px';
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    // tslint:disable-next-line:no-empty
    private onTouchedCallback: () => void = () => { };
    // tslint:disable-next-line:no-empty
    private onChangeCallback: (_: any) => void = () => { };

    // tslint:disable-next-line:member-ordering
    ngOnDestroy(): void {
        if (this.textInputSub) {
           this.textInputSub.unsubscribe();
        }
        if (this.controlSub) {
           this.controlSub.unsubscribe();
        }
        if (this.yearSelectSub) {
            this.yearSelectSub.unsubscribe();
        }
        if (this.removeListener) {
            this.removeListener();
        }
    }
}
