import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, Input, forwardRef, EventEmitter, Output } from '@angular/core';

export const VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UiCheckboxComponent),
    multi: true,
};
@Component({
  selector: 'ui-checkbox',
  templateUrl: './ui-checkbox.component.html',
  styleUrls: ['./ui-checkbox.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class UiCheckboxComponent implements ControlValueAccessor {
    _disabled: boolean;
    _checked: boolean;
    _id = Math.ceil(Math.random() * 1000000).toString();
    // ID by default
    @Input() name = `chk-${this._id}`;
    @Input() display = '';
    @Input('checked') set checked (conditional: boolean) {
        this._checked = conditional === true ? true : false;
    }
    @Input('disabled') set disabled (conditional: boolean) {
        this._disabled = conditional !== false;
    }

  constructor() { }

    /**
     * Used to store a reference to the registerOnChange function returned by the forms API
     */
    propagateChange = (_: any) => {};

    /**
     * Writes a new value to the element.  A boolean that states if the box is checked.
     * This method will be called by the forms API to write to the view when programmatic
     * (model -> view) changes are requested
     */
    writeValue(value: any) {
        this.checked = value;
    }

    /**
     * Registers a callback function that should be called when the control's value changes
     * in the UI. This is called by the forms API on initialization so it can update the form model
     * when values propagate from the view (view -> model).
     */
    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    /**
     * Sets the value of this.checked anytime a checkbox is selected then executes the callback
     * provided by the forms API
     */
    onChange(event: any) {
        this.writeValue(event.target.checked);
        this.propagateChange(event.target.checked);
    }

    /**
     * Registers a callback function that should be called when the control receives a blur event.
     * This is called by the forms API on initialization so it can update the form model on blur.
     * This is left black intentionally as it is not needed for this element but is required for
     * ControlValueAccessor impelementation.
     */
    registerOnTouched(fn: any) { }

}
