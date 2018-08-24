import { Component, OnInit } from '@angular/core';
import { dataListMock } from './mocklist';

@Component({
    selector: 'styleguide-data-table',
    templateUrl: './data-table.component.html',
})
export class StyleguideDataTableComponent {

    dataSource = dataListMock;

    /**
     * Example 0
     */

    code0 = `
    // Data : 

    dataSource = []
    
    // ...

    // ColumnDefinition:

    columnDefinition: IDataTableColumn[] = [
        {
            columnHeaderDisplayName: 'Index',
            displayProperty: 'index',
            class: 'col-xs-4'
        },
        {
            columnHeaderDisplayName: 'Name',
            displayProperty: 'name',
            class: 'col-xs-4 ',
        },
        {
            columnHeaderDisplayName: 'Company',
            displayProperty: 'company',
            class: 'col-xs-4'
        },
    ];

    // HTml template
    &lt;ui-datatable [columnDefinition]="example1" [dataSource]="[]" itemsNotFoundMessage="Items not found"&gt;&lt;/ui-datatable&gt;

    `;

    /**
     * Example 1 : With data
     */

    example1 = [
        {
            columnHeaderDisplayName: 'Index',
            displayProperty: 'index',
            // flex: 1,
            width: '10%',
            // class: 'col-xs-4'
        },
        {
            columnHeaderDisplayName: 'Name',
            displayProperty: 'name',
            // flex: 15,
            width: '50%',
            // class: 'col-xs-4 ',
            sortKey: 'name'
        },
        {
            columnHeaderDisplayName: 'Company',
            displayProperty: 'company',
            // flex: 15,
            width: '40%',
            // class: 'col-xs-4'
        },
    ];

    code1 = `
    // Data : 

    dataSource = [
        {
          "_id": "5a6f96b6cd6219f169a363db",
          "index": 0,
          "guid": "f3daa56c-5e17-4a42-af2e-462f5e4a5f43",
          "isActive": false,
          "balance": "$2,497.91",
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "green",
          "name": "Mcgowan Patrick",
          "longitude": 174.134556,
    // ...
    
    // Columns:

    columnDefinition: IDataTableColumn[] = [
        {
            columnHeaderDisplayName: 'Index',
            displayProperty: 'index',
            class: 'col-xs-4'
        },
        {
            columnHeaderDisplayName: 'Name',
            displayProperty: 'name',
            class: 'col-xs-4 ',
        },
        {
            columnHeaderDisplayName: 'Company',
            displayProperty: 'company',
            class: 'col-xs-4'
        },
    ];

    // HTml template
    &lt;ui-datatable [columnDefinition]="example1" [dataSource]="dataSource" itemsNotFoundMessage="Items not found"&gt;&lt;/ui-datatable&gt;

    `;

    /**
     * Example2  : Dynamic columns with ng-template and dt-template-name directive
     */

    example2 = [
        {
            columnHeaderDisplayName: 'Index',
            displayProperty: 'index',
            class: 'col-xs-1'
        },
        {
            columnHeaderDisplayName: 'Name',
            displayProperty: 'name',
            class: 'col-xs-3 ',
        },
        {
            columnHeaderDisplayName: 'About',
            displayProperty: 'about',
            class: 'col-xs-8'
        },
    ];

    code2 = `
    // Data : 

    dataSource = [
        {
          "_id": "5a6f96b6cd6219f169a363db",
          "index": 0,
          "about": "Commodo ut quis sint ex consectetur ...
          "name": "Mcgowan Patrick",
    // ...
    
    // Columns:

    columnDefinition: IDataTableColumn[] =  [
        {
            columnHeaderDisplayName: 'Index',
            displayProperty: 'index',
            class: 'col-xs-1'
        },
        {
            columnHeaderDisplayName: 'Name',
            displayProperty: 'name',
            class: 'col-xs-3 ',
        },
        {
            columnHeaderDisplayName: 'About',
            <b>displayProperty: 'about',</b>
            class: 'col-xs-8'
        },
    ];

    // HTml template
    &lt;ui-datatable [columnDefinition]="columnDefinition" [dataSource]="dataSource" itemsNotFoundMessage="Items not found"&gt;
            <b>
            &lt;div *displayPropertyTemplate="let row in 'about'; index as idx"&gt;
                &lt;b&gt;{{ row.about | ellipsis: 20}}&lt;/b&gt; {{ idx }}
            &lt;/div&gt;
            </b>
    &lt;/ui-datatable&gt;

    `;

    /**
     * Example3  : Action Column
     */

    example3 = [
        {
            columnHeaderDisplayName: 'Index',
            displayProperty: 'index',
            class: 'col-xs-1'
        },
        {
            columnHeaderDisplayName: 'Name',
            displayProperty: 'name',
            class: 'col-xs-8 ',
        },
        {
            columnHeaderDisplayName: 'Actions',
            displayProperty: 'actions',
            class: 'col-xs-3'
        },
    ];

    removeRow(row) {
        alert('Row index: ' + row.index);
    }

    // tslint:disable-next-line:member-ordering
    code3 = `
    // Data : 

    dataSource = [
        {
          "_id": "5a6f96b6cd6219f169a363db",
          "index": 0,
          "about": "Commodo ut quis sint ex consectetur ...
          "name": "Mcgowan Patrick",
    // ...
    
    // Columns:

    columnDefinition: IDataTableColumn[] = [
        {
            columnHeaderDisplayName: 'Index',
            displayProperty: 'index',
            class: 'col-xs-1'
        },
        {
            columnHeaderDisplayName: 'Name',
            displayProperty: 'name',
            class: 'col-xs-8 ',
        },
        {
            columnHeaderDisplayName: 'Actions',
            <b>displayProperty: 'actions',</b>
            class: 'col-xs-3'
        },
    ];

    // Controller method
    <b>
    removeRow(row) {
        alert('Row index: ' + row.index);
    }</b>


    // HTml template
    &lt;ui-datatable [columnDefinition]="columnDefinition" [dataSource]="dataSource" itemsNotFoundMessage="Items not found"&gt;
    <b>
            &lt;div *displayPropertyTemplate="let row in 'actions'; index as idx"&gt;
                &lt;ui-icon name="icon-app_delete" size="icon-xs" (click)="removeRow(row)"&gt;&lt;/ui-icon&gt;
            &lt;/div&gt;
    </b>
    &lt;/ui-datatable&gt;

    `;
}
