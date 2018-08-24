import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiDatePickerComponent } from './ui-datepicker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiFormSelectModule } from '@simplywell/ui-form-select';
import { UiInputComponent } from '@simplywell/ui-input';

@NgModule({
    declarations: [
        UiDatePickerComponent,
        UiInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UiFormSelectModule
    ],
    exports: [ UiDatePickerComponent ],
    providers: [],
})
export class UiDatepickerModule {}
