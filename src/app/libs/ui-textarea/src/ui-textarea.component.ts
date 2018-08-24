import { Component, OnInit, Input, AfterViewInit, forwardRef, Inject, Host,
        SkipSelf, EventEmitter, Output, ViewChild, ElementRef, Optional,
        PLATFORM_ID, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

import autosize from 'autosize';

export const VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UiTextareaComponent),
    multi: true,
};

@Component({
    selector: 'ui-textarea',
    templateUrl: './ui-textarea.component.html',
    styleUrls: ['./ui-textarea.component.scss'],
    providers: [ VALUE_ACCESSOR ]
})
export class UiTextareaComponent implements OnInit, ControlValueAccessor, AfterViewInit {
    // Input aliases
    _autofocus: boolean;
    _clearIcon: boolean;
    _required: boolean;
    _checkIcon: boolean;
    _autoresize: boolean;

    // ControlValueAccessor
    control: FormControl = new FormControl();
    onChange: Function;
    onTouch: Function;
    onSetDisabledState: boolean;

    // class variables
    initialHeight: any;
    desiredHeight: string;
    inputValue: any = '';
    showClearIcon = false;
    isBlockElement = true;

    @Input() rows = 2;
    @Input() maxRows = this.rows;
    @Input() formControlName: string;
    @Input() label: string;
    @Input() size = '';
    @Input() resize = 'none';
    @Input() set autofocus(conditional: boolean) {
        this._autofocus = conditional !== false;
    }
    @Input() set required(conditional: boolean) {
        this._required = conditional !== false;
    }
    @Input() set clearIcon(conditional: boolean) {
        this._clearIcon = conditional !== false;
    }
    @Input() set checkIcon(conditional: boolean) {
        this._checkIcon = conditional !== false;
    }
    @Input() set autoresize(conditional: boolean) {
        this._autoresize = conditional !== false;
    }

    @Output('change') change: EventEmitter<any> = new EventEmitter();

    @ViewChild('input') inputElement: ElementRef;
    @ViewChild('labelEl') labelElement: ElementRef;
    @ViewChild('container') containerElement: ElementRef;

    constructor(@Optional() @Host() @SkipSelf()
                private controlContainer: ControlContainer,
                private renderer: Renderer2,
                @Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {
        this.control = this.controlContainer.control.get(this.formControlName) as FormControl;
        if (this.maxRows < this.rows) {
            this.maxRows = this.rows;
        }
    }

    ngAfterViewInit(): void {
        this.initialHeight = this.inputElement.nativeElement.offsetHeight;

        // set min-height so manual resize doesn't get ugly
        this.setMinHeight(this.inputElement.nativeElement);

        // switch element to inline-block if using horizontal or both for resize
        if (this.resize === 'horizontal' || this.resize === 'both') {
            this.setMinWidth(this.inputElement.nativeElement);
            this.setInlineBlock(this.containerElement.nativeElement);
        }

        if (this._autofocus) {
            this.setFocus();
        }
        if (this._autoresize) {
            this.setMaxHeightBasedOnRows();
            autosize(this.inputElement.nativeElement);
        }
    }

    /**
     * Sets the css property "maxHeight" on the text area based on the number of rows and maxRows.
     * For use with "autoresize".
     */
    setMaxHeightBasedOnRows(): void {
        let rowHeight = this.calculateRowHeight();
        let additionalRows = this.maxRows - this.rows;
        let desiredHeight = rowHeight * additionalRows + this.initialHeight;
        this.renderer.setStyle(
            this.inputElement.nativeElement,
            'maxHeight',
            `${desiredHeight}px`
        );
    }

    setFocus(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.inputElement.nativeElement.focus();
        }
    }

    isInputEmpty(): boolean {
        return this.inputValue === '' || this.inputValue === null || this.inputValue === undefined;
    }

    onKeyup(value: string | number): void {
        const previousValue = this.inputValue;
        this.inputValue = value;
        this.showClearIcon = value ? true : false;
        if (previousValue !== value) {
            this.onChange(value);
            this.change.emit(value);
        }
    }

    clearInput(): void {
        this.inputValue = '';
        this.onChange('');
    }

    // ControlValueAccessor functions
    writeValue(obj: any): void {
        this.inputValue = obj ? obj : '';
    }
    registerOnChange(fn: any): any {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.onSetDisabledState = isDisabled;
    }

    /**
     * Calculates the height, in pixels, of a row of text within the textarea
     * element based on the class attribute "size".
     */
    private calculateRowHeight(): number {
        switch (this.size) {
            case 'large':
                return 21;
            case 'xlarge':
                return 26;
            default:
                return 18;
        }
    }

    private setMinHeight(el: Element): void {
        let desiredHeight = this.initialHeight - (this.calculateRowHeight() * (this.rows - 1));
        this.renderer.setStyle(
            el,
            'min-height',
            `${desiredHeight}px`
        );
    }

    /**
     * Set's the min-width attribute of the input Element to equal the width of the textarea's label.
     */
    private setMinWidth(el: Element): void {
        const labelWidth = this.labelElement.nativeElement.offsetWidth;
        this.renderer.setStyle(
            el,
            'min-width',
            `${labelWidth}px`
        );
    }

    private setInlineBlock(el: Element): void {
        this.renderer.setStyle(
            el,
            'display',
            'inline-block'
        );
    }
}
