import { StyleguideFormTextareaComponent } from './form-textarea/form-textarea.component';
import { StyleguidePanelComponent } from './panel/styleguide-panel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { StyleguideComponent } from './styleguide.component';
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
import { StyleguideGridComponent } from './grid/styleguide-grid.component';

const appRoutes: Routes = [
    {
        path: '',
        component: StyleguideComponent,
        children: [
            {
                path: '', redirectTo: 'intro', pathMatch: 'full'
            },
            {
                path: 'intro',
                component: StyleguideIntroComponent
            },
            {
                path: 'grid',
                component: StyleguideGridComponent
            },
            {
                path: 'typography',
                component: StyleguideTypographyComponent
            },
            {
                path: 'iconography',
                component: StyleguideIconographyComponent
            },
            {
                path: 'panel',
                component: StyleguidePanelComponent
            },
            {
                path: 'buttons',
                component: StyleguideButtonsComponent
            },
            {
                path: 'selectors',
                component: StyleguideSelectorsComponent
            },
            {
                path: 'tags',
                component: StyleguideTagsComponent
            },
            {
                path: 'loaders',
                component: StyleguideLoadersComponent
            },
            {
                path: 'form-input',
                component: StyleguideFormInputComponent
            },
            {
                path: 'form-textarea',
                component: StyleguideFormTextareaComponent
            },
            {
                path: 'form-checkbox',
                component: StyleguideFormCheckboxesComponent
            },
            {
                path: 'form-radiobutton',
                component: StyleguideFormRadioButonComponent
            },
            {
                path: 'data-table',
                component: StyleguideDataTableComponent
            },
            // {
            //     path: 'coach-tip',
            //     component: StyleguideCoachesTipsComponent
            // },
            // {
            //     path: 'progress-indicator',
            //     component: StyleguideProgressIndicatorComponent
            // },
            {
                path: 'tooltips',
                component: StyleguideTooltipsComponent
            },
            {
                path: 'toasts',
                component: StyleguideToastsComponent
            },
            {
                path: 'selects',
                component: StyleguideFormSelectsComponent
            },
            {
                path: 'datepicker',
                component: StyleguideDatepickerComponent
            },
            {
                path: 'fullscreen-modal',
                component: StyleguideFullscreenModalComponent
            },
            {
                path: 'overflow-menu',
                component: StyleGuideUiOverflowMenuComponent
            },
            {
                path: 'modals',
                component: StyleguideModalsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class StyleguideRoutingModule { }
