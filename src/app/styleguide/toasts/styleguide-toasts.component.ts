import { Component, OnInit } from '@angular/core';
import { UiToastService, UiToastMessage } from '../../libs/ui-toast/src';

@Component({
    selector: 'styleguide-toasts',
    templateUrl: './styleguide-toasts.component.html',
    styleUrls: ['./styleguide-toasts.component.scss']
})
export class StyleguideToastsComponent {
    constructor(private toastsService: UiToastService) { }

    popSuccessToastNoCTA() {
        this.toastsService.popSuccessToastMessage('Success Message');
    }

    popSuccessToastWithCTA() {
        let toast = new UiToastMessage(
            'Success Message',
            'success',
            true,
            'Close'
        );
        this.toastsService.popToastMessage(toast);
    }

    popWarningToastWithCTA() {
        let toast = new UiToastMessage(
            'Warning Message',
            'warning',
            true,
            'Close'
        );
        this.toastsService.popToastMessage(toast);
    }

    popWarningToastNoCTA() {
        this.toastsService.popWarningToastMessage('Warning Message');
    }

    popAlertToast() {
        let toast = new UiToastMessage(
            'Alert Message',
            'alert',
            true,
            'Close'
        );
        this.toastsService.popToastMessage(toast);
    }
}
