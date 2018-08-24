import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiToastMessage } from './ui-toast-message.model';
import { UiToastService } from './ui-toast.service';
import { UiToastComponent } from './ui-toast.component';
import { ClickOutsideDirective } from './click-outside.directive';

@NgModule({
    declarations: [
        UiToastComponent,
        ClickOutsideDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        UiToastComponent,
        ClickOutsideDirective
    ]
})
export class UiToastModule {
    static forRoot() {
        return {
            ngModule: UiToastModule,
            providers: [ UiToastService ]
        };
    }
}
