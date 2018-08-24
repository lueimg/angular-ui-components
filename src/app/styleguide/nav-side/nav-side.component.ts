import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'styleguide-nav-side',
    templateUrl: './nav-side.component.html',
    styleUrls: ['./nav-side.component.scss']
})
export class StyleguideNavSideComponent implements OnInit {

    // sectionDisplayed: string = 'intro';
    // toastCTA: string = 'ok';

    constructor() { }

    ngOnInit() { }
}
