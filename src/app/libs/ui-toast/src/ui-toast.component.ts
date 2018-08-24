import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

import { UiToastMessage } from './ui-toast-message.model';
import { UiToastService } from './ui-toast.service';

@Component({
    selector: 'ui-toast',
    templateUrl: './ui-toast.component.html',
    styleUrls: ['./ui-toast.component.scss']
})

export class UiToastComponent implements OnInit, OnDestroy {

    @Input() title: string;
    @Input() tip: string;

    toast: UiToastMessage;
    toastStatus = false;
    toastCount = 0;
    countDown: any = null;
    counter = 0;
    displayCount: number;
    timerSubscription: Subscription;

    private appToasterObservable: Subscription;

    constructor(private toastsService: UiToastService) { }

    ngOnInit() {
        this.appToasterObservable = this.toastsService.toastMessage$
            .subscribe((results: UiToastMessage) => {
                this.activateToast(results);
            });
    }

    ngOnDestroy() {
        this.appToasterObservable.unsubscribe();
    }

    /**
     * Activates a new Toast Message.  If a Toast Message is already present on-screen
     * it will be dimissed and the new Toast Message will activate after one second.
     */
    activateToast(appToastMessage: UiToastMessage) {
        if (this.toast) {
            this.dismissToast();
            setTimeout(() => {
                this.updateToast(appToastMessage);
            }, 1000);
        } else {
            this.updateToast(appToastMessage);
        }
    }

    /**
     * Applys the details from an AppToastMessage to the ToastComponent. If the Toast Message
     * is not dismissible a 5 second timer will be created and the toast will auto-dismiss when the timer completes.
     */
    updateToast(appToastMessage: UiToastMessage) {
        this.toast = appToastMessage;
        this.toastsService.initCallToAction(null);
        this.toastCount++;
        this.toastStatus = true;
        // if the toast is not dismissable create a 5 second timer
        // and dismiss the toast once the timer completes
        if (!this.toast.dismissable) {
            this.counter = 6;
            this.countDown = Observable.timer(0, 1000)
                .take(this.counter)
                .map((val: number) => (this.counter - 1) - val);
            this.timerSubscription = this.countDown
                .subscribe(
                    (val: number) => this.displayCount = val,
                    (err: any) => { },
                    () => this.dismissToast()
                );
        }
    }

    /**
     * Dismisses a Toast Message. If the Toast Message has a callaback it WILL be in invoked.
     */
    dismissToast() {
        if (this.toast && this.toast.callback) {
            this.toast.callback();
        }
        this.resetToastValues();
    }

    /**
     * Dismisses a Toast Message. If the Toast Message has a callback function it will NOT be invoked.
     */
    dismissToastNoCallback() {
        console.log(this.toast);
        if (this.toast) {
            this.resetToastValues();
        }
    }

    /**
     * Resets the Toast Component's properties.  If the toast has a timer and
     * was dismissed before the timer completed then unsubscribe from observable timer.
     */
    resetToastValues() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
        this.toastStatus = false;
        this.countDown = null;
        this.counter = 0;
        setTimeout(() => {
            this.toast = null;
        }, 1000);
    }
}
