import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { SelectOption } from './select-option-model';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ui-form-select',
    templateUrl: './ui-form-select.component.html',
    styleUrls: ['./ui-form-select.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: UiFormSelectComponent,
        multi: true
    }],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiFormSelectComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnDestroy {

    _options: SelectOption[];
    _displayedOptions: SelectOption[] = [];
    _search: boolean;
    _ignoreBodyScroll: boolean;
    selectedOption: SelectOption;

    @Input() set search (conditional: boolean) {
        this._search = conditional !== false;
    }
    get search () {
        return this._search;
    }

    @Input() set options (options: SelectOption[]) {
        this._displayedOptions = options;
        this._options = options;
    }
    get options () {
        return this._displayedOptions;
    }

    @Input() set ignoreBodyScroll (conditional: any) {
        this._ignoreBodyScroll = conditional !== false;
    }

    @Input() dynamicSize = false;
    @Input() optionsState = false;
    @Input() isRequired = false;
    @Input() formControlName: string;
    @Input() label: string;
    @Input() labelPosition: string;
    @Input() labelWidth: string;
    @Input() optionsHeight: string;
    @Input() positionType: string;
    @Input() showSelectedText = true;

    @Output('change') change: EventEmitter<any> = new EventEmitter();

    @ViewChild('labelContainer') labelContainer: ElementRef;
    @ViewChild('optionsContainer') optionsContainer: ElementRef;
    @ViewChild('selectContainer') selectContainer: ElementRef;
    @ViewChild('searchInput') searchInput: ElementRef;

    set value(value: any) {
        let valueExists;
        if (this.options) {
            valueExists = this.options.filter((option) => option.value === value || option.name === value)[0];
        }
        this.selectedOption = valueExists !== undefined ? valueExists : this.options[0];
    }

    constructor(private elementRef: ElementRef,
                private renderer: Renderer2) {}

    propagateChange = (x) => {};

    ngOnInit() {
        if (this.options) {
            this.selectedOption = this.options[0];
        }
    }

    ngOnDestroy() {
        // Avoid retaining scroll-lock class on route change
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('scroll-lock');
    }

    ngAfterViewInit() {
        if (this.labelWidth) {
            this.renderer.setStyle(this.labelContainer.nativeElement, 'width', this.labelWidth);
        }
        if (this.optionsHeight) {
            this.renderer.setStyle(this.optionsContainer.nativeElement, 'maxHeight', this.optionsHeight);
        }
        if (!this.dynamicSize) {
            const width = this.selectContainer.nativeElement.offsetWidth;
            this.renderer.setStyle(this.optionsContainer.nativeElement, 'min-width', `${width}px`);
        }

        if (this.optionsState) {
          this.focusSearch();
        }
    }

    focusSearch () {
        if (this.search) {
            this.searchInput.nativeElement.focus();
        }
    }

    closeMenu() {
        if (this.optionsState === true) {
            this.optionsState = false;
            this.scrollLock(this.optionsState);
        }
    }

    selectOption(selectedOption: SelectOption, event: Event) {
        if (!selectedOption.disabled) {
            const optionValue = selectedOption.value === undefined ? selectedOption.name : selectedOption.value;
            this.writeValue(optionValue);
            this.change.emit(optionValue);
            this.propagateChange(optionValue);
            this.toggleOptions();
            event.stopPropagation();
        }
    }

    toggleOptions(event?: MouseEvent) {
        let DOMElement = this.selectContainer.nativeElement;
        let positions: any = this.getElementPosition(DOMElement);
        this.renderer.setStyle(
            this.optionsContainer.nativeElement,
            'top',
            `${positions.top + 6}px`
        );
        this.renderer.setStyle(
            this.optionsContainer.nativeElement,
            'left',
            `${positions.left}px`
        );
        if (!this.dynamicSize) {
            const width = this.selectContainer.nativeElement.offsetWidth;
            this.renderer.setStyle(this.optionsContainer.nativeElement, 'min-width', `${width}px`);
        }
        this.optionsState = !this.optionsState;
        this.scrollLock(this.optionsState);
        if (this.optionsState) {
          this.focusSearch();
        }
    }

    scrollLock(state: boolean) {
        const body = document.getElementsByTagName('body')[0];
        if (state) {
            body.classList.add('scroll-lock');
        } else {
            body.classList.remove('scroll-lock');
        }
    }

    filterList (value: string) {
        if (value) {
            this._displayedOptions = this._options
                .filter((option) => !option.disabled)
                .filter((option) => option.name.toLowerCase().match(value.toLowerCase()));
        } else {
            this._displayedOptions = this._options;
        }
    }

    writeValue(value: any) {
        this.value = value;
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) { }

    private getElementPosition(el: any) {
        let og = el;
        let left = 0;
        let top = 0;
        if (el.offsetParent) {
            do {
                top += el.offsetTop;
                left += el.offsetLeft;
                el = el.offsetParent;
            } while (el);
        }
        if (og.parentNode) {
            do {
                if (this._ignoreBodyScroll) {
                    if (og.nodeName === 'HTML') {
                        break;
                    }
                }
                if (og.scrollTop) {
                    top -= og.scrollTop;
                }
                if (og.scrollLeft) {
                    left -= og.scrollLeft;
                }
                og = og.parentNode;
            } while (og);
        }
        left = left >= 0 ? left : 0;
        top = top >= 0 ? top : 0;
        return { top, left };
    }

}
