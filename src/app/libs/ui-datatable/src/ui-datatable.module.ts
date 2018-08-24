import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIDataTableComponent } from './ui-datatable.component';
import { UiDatatableTemplateColComponent, UiDatatableColumnTemplateDirective } from './ui-datatable-extras.component';
import { UiIconModule } from '@simplywell/ui-icon';

@NgModule({
  declarations: [
    UIDataTableComponent,
    UiDatatableTemplateColComponent,
    UiDatatableColumnTemplateDirective,
  ],
  imports: [
    CommonModule,
    UiIconModule
  ],
  exports: [
    UIDataTableComponent,
    UiDatatableTemplateColComponent,
    UiDatatableColumnTemplateDirective,
  ],
  providers: [],
})
export class UiDatatableModule {}
