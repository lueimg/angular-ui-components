import { UiTextareaModule } from './../libs/ui-textarea/src/ui-textarea.module';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { DateFormatPipe } from './pipes/dateformat.pipe';
import { HeaderFlexComponent } from './header/header-flex/header-flex.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { UiButtonComponent } from '../libs/ui-button/src';
import { UiCheckboxComponent } from '../libs/ui-checkbox/src';
import { UiDatatableModule } from '../libs/ui-datatable/src';
// import { UiDatepickerModule } from '@simplywell/ui-datepicker';
import { UiDatepickerModule } from '../libs/ui-datepicker/src';
import { UiFormSelectModule } from '../libs/ui-form-select/src';
import { UiFullscreenModalComponent } from '../libs/ui-fullscreen-modal/src';
import { UiIconComponent } from '../libs/ui-icon/src';
import { UiInputComponent } from '../libs/ui-input/src';
import { UiLoaderComponent } from '../libs/ui-loader/src';
import { UiModalComponent } from '../libs/ui-modal/src';
import { UiOverflowMenuModule } from '../libs/ui-overflow-menu/src';
import { UiPanelComponent } from '../libs/ui-panel/src';
import { UiRadiobuttonComponent } from '../libs/ui-radiobutton/src';
import { UiSelectorComponent } from '../libs/ui-selector/src';
import { UiTagComponent } from '../libs/ui-tag/src';
import { UiTooltipComponent } from '../libs/ui-tooltip/src';

// * Important: UiToastModule must be imported in app.module.ts as UiToastModule.forRoot()
const DeclareExportModules = [
    UiDatepickerModule,
    UiFormSelectModule,
    UiDatatableModule,
    UiOverflowMenuModule,
    UiTextareaModule
];

const DeclareExportComponents = [
    UiButtonComponent,
    UiCheckboxComponent,
    UiFullscreenModalComponent,
    UiIconComponent,
    UiInputComponent,
    UiLoaderComponent,
    UiModalComponent,
    UiRadiobuttonComponent,
    UiSelectorComponent,
    UiTagComponent,
    UiTooltipComponent,
    HeaderComponent,
    HeaderFlexComponent,
    FooterComponent,
    UiPanelComponent,
    DateFormatPipe,
    EllipsisPipe
];

@NgModule({
    declarations: [
        ...DeclareExportComponents
    ],
    imports: [
        CommonModule,
        RouterModule,
        ...DeclareExportModules,
        // UiToastModule.forRoot(),
    ],
    exports: [
        ...DeclareExportComponents,
        ...DeclareExportModules,
        // UiToastModule,
    ],
    providers: [],
})
export class SharedModule {}
