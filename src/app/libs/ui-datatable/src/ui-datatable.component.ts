import { QueryList, Component, OnInit, OnDestroy, Input, ViewChild, ViewContainerRef,
  TemplateRef, EmbeddedViewRef, ContentChildren, ElementRef, AfterContentInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { UiDatatableColumnTemplateDirective } from './ui-datatable-extras.component';
import { Observable } from 'rxjs/Observable';

export interface IDataTableColumn {
    // Header column Name
    columnHeaderDisplayName?: string;
    // Get Value from Observable
    // e.g. columnHeaderDisplayName$: this.translate.get('label_date_completed')
    columnHeaderDisplayName$?: Observable<string>;
    // Template Name or PropertyName
    displayProperty?: string;
    // Property Name used for Sorting the rows
    sortKey?: string;
    // If true, Hide the column and show the field on row mousehover
    showOnHoverRow?: boolean;
    // Dynamic Width
    class?: string; // css classes : col-xs-4 , ...
    width?: string; // 30% , 2rem etc
    flex?: string;  //  0 , 1 , 2
}

@Component({
  selector: 'ui-datatable',
  templateUrl: './ui-datatable.component.html',
  styleUrls: ['./ui-datatable.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIDataTableComponent implements AfterContentInit {

  @Input() tableName = '';
  @Input() tableTitle: string;
  @Input() limitRows = 10;
  @Input() itemsNotFoundMessage = 'Items not found.';
  @Input() columnDefinition: IDataTableColumn[] = [];
  @ContentChildren(UiDatatableColumnTemplateDirective) uiDatatableColumnTemplates: QueryList<any>;

  columnTemplates: { [key: string]: TemplateRef<any> } = {};
  _totalRecords: any[] = [];
  _dataDisplayed: any[] = [];
  lastPage = 0;
  currentPage = 1;
  displayedPages = [];
  pages = [];

  sortKey = '';
  sortType = 'asc';

  @Input() set dataSource (value) {
      this._totalRecords = value || [];
      this.currentPage = 1;
      this.lastPage = this.getPageCount();

      this.sortDataDisplayed();

      this._dataDisplayed = this._totalRecords.slice(0, this.limitRows);
      this.pages = [...this.generatePages()];
      this.displayedPages = this.pages.filter((item) => item < 9);

  }

  get dataSource () {
      return this._totalRecords;
  }

  ngAfterContentInit() {
     this.uiDatatableColumnTemplates.forEach((uiDataTableColumn: UiDatatableColumnTemplateDirective) => {
         this.columnTemplates = {
           ...this.columnTemplates,
           [uiDataTableColumn.displayProperty]: uiDataTableColumn.template
         };
      });
  }

    sortList (sortKey, sortType) {
        this.sortType = sortType;
        this.sortKey = sortKey;
        // Initialize the source again
        this.dataSource = this._totalRecords.slice(0);
    }

  sortDataDisplayed () {
    if (this.sortKey) {
        this._totalRecords.sort((a, b) => {
            if ( a[this.sortKey] < b[this.sortKey] ) {
                return this.sortType === 'asc' ? -1 : 1;
            }
            if ( a[this.sortKey] > b[this.sortKey] ) {
                return this.sortType === 'asc' ? 1 : -1;
            }
            return 0;
        });
      }
  }

  generatePages () {
      const data = [];
      for (let i = 1; i <= this.lastPage; i++) {
          data.push(i);
      }

      return data;
  }

  getPageCount() {
      return Math.ceil(this._totalRecords.length / this.limitRows) || 1;
  }

  goTo (page) {
      const initialIndex = page * this.limitRows - (this.limitRows);
      const finalIndex = page * this.limitRows;
      this._dataDisplayed = this._totalRecords.slice(initialIndex, finalIndex);
      this.currentPage = page;
      // Update pagination
      switch (this.currentPage) {
          case 1:
          case 2:
          case 3:
          case 4:
              this.displayedPages = this.pages.filter((item) => item < 9); break;
          case this.lastPage - 4:
              this.displayedPages = this.pages.filter((item) =>
                  item >  this.currentPage - 4); break;
          case this.lastPage - 3:
              this.displayedPages = this.pages.filter((item) =>
                  item >  this.currentPage - 5); break;
          case this.lastPage - 2:
              this.displayedPages = this.pages.filter((item) =>
                  item >  this.currentPage - 6); break;
          case this.lastPage - 1:
              this.displayedPages = this.pages.filter((item) =>
                  item >  this.currentPage - 7); break;
          case this.lastPage:
              this.displayedPages = this.pages.filter((item) =>
                  item >  this.currentPage - 8); break;
          default:
              this.displayedPages = this.pages.filter((item) =>
                  item > this.currentPage - 3 && item < this.currentPage + 4);
      }
  }

}
