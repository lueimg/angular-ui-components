import { Component, OnInit, Input, forwardRef, SkipSelf, Host,
  Optional, Output, EventEmitter, ElementRef, PLATFORM_ID, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

export const VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UiInputComponent),
    multi: true,
  };

@Component({
    selector: 'ui-input',
    templateUrl: './ui-input.component.html',
    styleUrls: [ './ui-input.component.scss'],
    providers: [VALUE_ACCESSOR]
})
export class UiInputComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  _autofocus = false;
  control: FormControl = new FormControl();
  onChange: Function;
  onTouch: Function;
  onSetDisabledState;
  inputValue: any = '';
  showClearIcon  = false;

  @Input() formControlName: string;
  @Input() label = 'type ...';
  @Input() type = 'text';
  @Input() size = '';
  @Input() set autofocus(condition: boolean) {
    this._autofocus = condition !== false;
  }
  @Input() set required (conditional: boolean) {
      this._required = conditional !== false;
  }
  @Input() set clearIcon (conditional: boolean) {
      this._clearIcon = conditional !== false;
  }
  @Input() set checkIcon (conditional: boolean) {
      this._checkIcon = conditional !== false;
  }

  @Output('change') change: EventEmitter<any> = new EventEmitter();
  @ViewChild('input') inputElement: ElementRef;

  _clearIcon;
  _required;
  _checkIcon;

  constructor (
      @Optional() @Host() @SkipSelf()
      private controlContainer: ControlContainer,
      private el: ElementRef,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {
  }

  ngOnInit () {
      // It will have ngModel issues
      this.control = this.controlContainer.control.get(this.formControlName) as FormControl;
  }

  ngAfterViewInit () {
      if (this._autofocus) {
          this.setFocus();
      }
  }

  setFocus () {
      if (isPlatformBrowser(this.platformId)) {
          this.inputElement.nativeElement.focus();
      }
  }

  isInputEmpty () {
      return this.inputValue === '' || this.inputValue === null || this.inputValue === undefined;
  }

  onKeyup (value: string | number) {
      const previousValue = this.inputValue;
      this.inputValue = value;
      this.showClearIcon = value ? true : false;
      if (previousValue !== value) {
          this.onChange(value);
          this.change.emit(value);
      }
  }

  clearInput() {
      this.inputValue = '';
      this.onChange('');
  }

  writeValue(obj: any): void {
      this.inputValue = obj ? obj : '';
  }
  registerOnChange(fn: any): void {
      this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
      this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
      this.onSetDisabledState = isDisabled;
  }
}
