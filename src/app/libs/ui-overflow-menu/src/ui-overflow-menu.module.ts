import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiOverflowMenuComponent } from './ui-overflow-menu.component';
import { UiIconModule } from '@simplywell/ui-icon';

@NgModule({
    declarations: [
        UiOverflowMenuComponent,
    ],
    imports: [
        CommonModule,
        UiIconModule
    ],
    exports: [ UiOverflowMenuComponent ],
    providers: [],
})
export class UiOverflowMenuModule {}
