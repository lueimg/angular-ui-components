import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export type DisplayType = '' | 'inline';

@Component({
  selector: 'ui-radiobutton',
  templateUrl: './ui-radiobutton.component.html',
  styleUrls: ['./ui-radiobutton.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: UiRadiobuttonComponent,
      multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiRadiobuttonComponent implements ControlValueAccessor {
    checked: boolean  = false;
    @Input() id: string = '';
    @Input() groupName: string = '';
    @Input() display: DisplayType = '';
    @Input() value: string = '';
    @Input() tabindex: number;

    @Output('change') change: EventEmitter<any> = new EventEmitter();
    @ViewChild('radioLabel') label: ElementRef;
    @ViewChild('radioInput') radioInput: ElementRef;

    propagateChange: Function = (_: any) => null;

    writeValue(value: any) {
        this.checked = value === this.value;
        this.radioInput.nativeElement.checked = this.checked;
    }

    select () {
        this.radioInput.nativeElement.checked = true;
        this.checked = true;
        this.propagateChange(this.value);
    }

    onChanges () {
        this.select();
    }

    onClick (value) {
      this.propagateChange(value);
    }
    // Force render change value and style
    markAsChecked () {
      this.label.nativeElement.click();
    }
    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any) {}
}
