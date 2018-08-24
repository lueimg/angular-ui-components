import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { UiToastMessage } from './ui-toast-message.model';

@Injectable()
export class UiToastService {
    // Observable streams
    toastMessage$;
    callToAction$;

    // Observable sources
    private toastMessageSource = new Subject<UiToastMessage>();
    private callToAction$Source = new Subject<string>();

    // Observable string streams
    constructor() {
        this.toastMessage$ = this.toastMessageSource.asObservable();
        this.callToAction$ = this.callToAction$Source.asObservable();
    }

    // Service message commands
    popToastMessage(toastMessage: UiToastMessage) {
        this.toastMessageSource.next(toastMessage);
    }

    popSuccessToastMessage(message: string) {
        this.toastMessageSource.next(new UiToastMessage(message, 'success', false, ''));
    }

    popAlertToastMessage(message: string) {
        this.toastMessageSource.next(new UiToastMessage(message, 'alert', true, 'Close'));
    }

    popWarningToastMessage(message: string) {
        this.toastMessageSource.next(new UiToastMessage(message, 'warning', false, ''));
    }

    showUnexpectedError(message: string) {
        this.popAlertToastMessage(message);
    }

    popErrorResponse(errorResponse: any, unexpectedErrorMessage?: string) {
        if (errorResponse.errors && errorResponse.errors[0] !== undefined &&
            errorResponse.errors[0].title !== undefined) {
            this.popAlertToastMessage(errorResponse.errors[0].title);
            return;
        }

        if (errorResponse.errors && errorResponse.errors !== undefined &&
            errorResponse.errors.summary[0] !== undefined) {
            this.popAlertToastMessage(errorResponse.errors.summary[0]);
            return;
        }
        this.showUnexpectedError(unexpectedErrorMessage);
    }

    initCallToAction(data: string) {
        this.callToAction$Source.next(data);
    }
}
