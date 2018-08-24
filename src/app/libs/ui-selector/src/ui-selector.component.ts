import { Component, Input, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'ui-selector',
    templateUrl: './ui-selector.component.html',
    styleUrls: ['./ui-selector.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: UiSelectorComponent,
        multi: true
    }],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSelectorComponent implements ControlValueAccessor {
    @Input() selected = false;

    // Allow property : disabled | [disabled]="true"
    // Add disabled class and avoid click on the element
    @Input() set disabled(conditional: boolean) {
        this._disabled = conditional !== false;
    }

    get disabled() {
        return this._disabled;
    }

    private _disabled: boolean;

    propagateChange: Function = (_: any) => null;

    onClick() {
        this.selected = !this.selected;
        this.propagateChange(this.selected);
    }

    writeValue(value: any) {
        this.selected = value === true;
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) { }
}
