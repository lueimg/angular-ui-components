import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';

@Component({
    selector: 'styleguide-coachestips',
    templateUrl: './coachestips.component.html',
    styleUrls: ['./coachestips.component.scss']
})
export class StyleguideCoachesTipsComponent {

    constructor(private storageService: StorageService) {
        this.storageService.cleanCoachTipsStorage();
    }
}
