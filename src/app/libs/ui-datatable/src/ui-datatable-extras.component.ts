import { AfterViewInit, ViewChild } from '@angular/core';
import { Directive, Input, TemplateRef, Component,
  OnInit, OnDestroy, EmbeddedViewRef, ViewContainerRef } from '@angular/core';

/**
 *  Directive to use externally
 *
 * Example
 * <div *displayPropertyTemplate="let row in 'displayProperty'; index as idx">
 *   {{ row?.name}} {{ idx }}
 * </div>
 *
 * @export
 * @class UIDataTableTemplateDirective
 */
@Directive({selector: '[displayPropertyTemplate]'})
export class UiDatatableColumnTemplateDirective {
  displayProperty  = '';
  @Input() set displayPropertyTemplateIn(value: string) {
    this.displayProperty = value;
  }
  constructor(public template: TemplateRef<any>) {}
}

/**
 * Component used internally
 * It is used within the ui-datatable component only
 *
 * @export
 * @class UIDataTableFieldComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'ui-datatable-template-col',
  template: ``
})
export class UiDatatableTemplateColComponent implements OnInit, OnDestroy {

  @Input() template: TemplateRef<any>;
  @Input() rowData: any;
  @Input() index: any;
  view: EmbeddedViewRef<any>;
  constructor(private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.view = this.viewContainer.createEmbeddedView(this.template, {
      $implicit: this.rowData, // use in the "let <var>" definition ...="let <var> in ..."
      row: this.rowData, // extra vars
      index: this.index, //  extra vars
  });
  }

  ngOnDestroy() {
      this.view.destroy();
  }
}
