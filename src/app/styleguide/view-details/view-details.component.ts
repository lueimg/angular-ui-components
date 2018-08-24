import { Component, Input } from '@angular/core';

@Component({
    selector: 'styleguide-view-details',
    templateUrl: './view-details.component.html',
})
export class StyleguideViewDetailsComponent {

    @Input() title: string = '';

}
