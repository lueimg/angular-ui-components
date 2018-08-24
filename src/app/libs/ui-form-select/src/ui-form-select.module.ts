import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';
import { UiFormSelectComponent } from './ui-form-select.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        UiFormSelectComponent,
        ClickOutsideDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [ UiFormSelectComponent ],
    providers: [],
})
export class UiFormSelectModule {}
