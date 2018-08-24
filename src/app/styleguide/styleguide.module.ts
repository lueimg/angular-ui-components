import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StyleguideComponent } from './styleguide.component';
import { StyleguideFormTextareaComponent } from './form-textarea/form-textarea.component';
import { StyleguidePanelComponent } from './panel/styleguide-panel.component';
import { StyleguideGridComponent } from './grid/styleguide-grid.component';
import { StyleguideNavSideComponent } from './nav-side/nav-side.component';
import { StyleguideViewDetailsComponent } from './view-details/view-details.component';
import { StyleguideIntroComponent } from './intro/intro.component';
import { StyleguideTypographyComponent } from './typography/typography.component';
import { StyleguideIconographyComponent } from './iconography/iconography.component';
import { StyleguideButtonsComponent } from './buttons/buttons.component';
import { StyleguideSelectorsComponent } from './selectors/selectors.component';
import { StyleguideTagsComponent } from './tags/tags.component';
import { StyleguideLoadersComponent } from './loaders/loaders.component';
import { StyleguideFormInputComponent } from './form-input/form-input.component';
import { StyleguideFormCheckboxesComponent } from './form-checkboxes/form-checkboxes.component';
import { StyleguideFormRadioButonComponent } from './form-radiobutton/form-radiobuton.component';
import { StyleguideDataTableComponent } from './data-table/data-table.component';
// import { StyleguideCoachesTipsComponent } from './coach-tip/coachestips.component';
// import { StyleguideProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { StyleguideTooltipsComponent } from './tooltips/tooltips.component';
import { StyleguideToastsComponent } from './toasts/styleguide-toasts.component';
import { StyleguideFormSelectsComponent } from './form-selects/styleguide-form-selects.component';
import { StyleguideDatepickerComponent } from './datepicker/styleguide-datepicker.component';
import { StyleguideFullscreenModalComponent } from './fullscreen-modal/styleguide-fullscreen-modal.component';
import { StyleGuideUiOverflowMenuComponent } from './ui-overflow-menu/ui-overflow-menu.component';
import { StyleguideModalsComponent } from './modals/styleguide-modals.component';

import { SharedModule } from './../shared/shared.module';
import { StyleguideRoutingModule } from './styleguide-routing.module';

import { GistModule } from '@sgbj/angular-gist';

@NgModule({
    declarations: [
        StyleguideComponent,
        StyleguideNavSideComponent,
        StyleguideIntroComponent,
        StyleguideTypographyComponent,
        StyleguideIconographyComponent,
        StyleguideButtonsComponent,
        StyleguideSelectorsComponent,
        StyleguideTagsComponent,
        StyleguideLoadersComponent,
        StyleguideFormInputComponent,
        StyleguideFormCheckboxesComponent,
        StyleguideFormRadioButonComponent,
        StyleguideDataTableComponent,
        // StyleguideCoachesTipsComponent,
        // StyleguideProgressIndicatorComponent,
        StyleguideTooltipsComponent,
        StyleguideToastsComponent,
        StyleguideFormSelectsComponent,
        StyleguideDatepickerComponent,
        StyleguideFullscreenModalComponent,
        StyleGuideUiOverflowMenuComponent,
        StyleguideModalsComponent,
        StyleguideViewDetailsComponent,
        StyleguideGridComponent,
        StyleguidePanelComponent,
        StyleguideFormTextareaComponent
    ],
    imports: [
        CommonModule,
        StyleguideRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        GistModule
    ],
    exports: [],
    providers: [],
})
export class StyleguideModule {}
