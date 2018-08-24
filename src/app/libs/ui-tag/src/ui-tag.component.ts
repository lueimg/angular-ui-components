import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ui-tag',
  templateUrl: './ui-tag.component.html',
  styleUrls: ['./ui-tag.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: UiTagComponent,
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTagComponent implements ControlValueAccessor  {

  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  propagateValue = (value: boolean) => null;

  writeValue(value: boolean): void {
    this.selected = value;
  }

  setActivated() {
    if (this.disabled) {
      return false;
    }
    this.selected = !this.selected;
    this.propagateValue(this.selected);
  }

  registerOnChange(fn): void {
    this.propagateValue = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnTouched(fn: any): void {
    // ...
  }
}
