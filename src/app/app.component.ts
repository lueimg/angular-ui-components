import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import { Subscription } from 'rxjs/Subscription';
import { BackdropService } from './services/backdrop/backdrop.service';
import { SidebarService } from './services/sidebar/sidebar.service';
import { ModalService } from './services/modal/modal.service';
import { ToastsService } from './services/toasts/toasts.service';
import { AppToastMessage } from './models/toasts-message.model';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(public appState: AppState) { }

    ngOnInit() { }

}
