import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ui-panel',
    templateUrl: './ui-panel.component.html',
    styleUrls: ['./ui-panel.component.scss']
})
export class UiPanelComponent implements OnInit {

    _container: boolean = false;
    _full: boolean;
    _top_primary: boolean;
    _top_secondary: boolean;

    // Use class affects the ui-components and first node child
    @Input() class: string;
    // Use cssClass affects only first node child
    @Input() cssClass: string;
    // Panel heading (title)
    @Input() heading: string;
    // Add bootstrap 'container' class name in the first child
    @Input() set container (conditional: boolean) {
        this._container = conditional !== false;
    }
    @Input() set full(condition: boolean) {
        this._full = condition !== false;
    }

    @Input() set borderPrimary(condition: boolean) {
        this._top_primary = condition !== false;
    }

    @Input() set borderSecondary(condition: boolean) {
        this._top_secondary = condition !== false;
    }

    constructor() { }

    ngOnInit() { }
}
