import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'styleguide-fullscreen-modal',
    templateUrl: './styleguide-fullscreen-modal.component.html',
    styleUrls: ['./styleguide-fullscreen-modal.component.scss']
})
export class StyleguideFullscreenModalComponent implements OnInit {

    stateModalA: boolean = false;
    stateModalB: boolean = false;

    openModalA() {
        this.stateModalA = true;
    }

    closeModalA() {
        this.stateModalA = false;
    }

    openModalB() {
        this.stateModalB = true;
    }

    closeModalB() {
        this.stateModalB = false;
    }

    constructor(private router: Router) { }

    ngOnInit() { }

    openNewRoute () {
        this.router.navigate(['/styleguide/fullscreen-modal/inRoute']);
    }
}