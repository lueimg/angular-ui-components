import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
export type Position = 'fixed' | 'not-fixed' | string;
@Component({
    selector: 'ui-fullscreen-modal',
    templateUrl: './ui-fullscreen-modal.component.html',
    styleUrls: ['./ui-fullscreen-modal.component.scss']
})
export class UiFullscreenModalComponent implements OnDestroy {
    readonly constants = {
        FIXED: 'fixed',
        NOT_FIXED: 'not-fixed'
    };

    _backIcon = false;
    _closeIcon = true;

    @Input() power = false;
    @Input() title: string;
    @Input() showHeader = true;
    @Input() showFooter = true;
    @Input() class = '';
    @Input() borderTopColor = ''; // success , alert , error, error-dark
    // fixed: value by default, add position fixed, but it will have problem with print Actions
    // not-fixed: It is used as a Page Layout, has good print action (See style guide examples)
    @Input() position: Position = this.constants.FIXED;
    // Return true to close modal, 
    // Return false: avoid closing modal
    // On false you will need to call close() manually from the component Parent e.g. <modal_name>.close()
    @Input() closeCallback: () => boolean;

    @Output() closeEvent: EventEmitter<boolean> = new EventEmitter();
    @Output() backEvent: EventEmitter<boolean> = new EventEmitter();
    @Output() openEvent: EventEmitter<any> = new EventEmitter();

    @Input() set closeIcon (conditional: boolean) {
      this._closeIcon = conditional !== false;
    }
    get closeIcon () {
      return this._closeIcon;
    }
    @Input() set backIcon (conditional: boolean) {
      this._backIcon = conditional !== false;
    }
    get backIcon () {
      return this._backIcon;
    }

    constructor (@Inject(DOCUMENT) private document: Document) {
    }

    addScrollLock () {
        const body: HTMLElement = this.document.getElementsByTagName('body')[0];
        body.classList.add('scroll-lock');
    }

    releaseScrollLock() {
        const body: HTMLElement = this.document.getElementsByTagName('body')[0];
        body.classList.remove('scroll-lock');
    }

    onClickCloseIcon() {
        if (!this.closeCallback || this.closeCallback && this.closeCallback()) {
            this.close();
        }
    }

    close () {
        this.power = false;
        this.closeEvent.emit(false);
        this.releaseScrollLock();
    }

    open() {
        this.power = true;
        this.openEvent.emit();
        this.addScrollLock();
    }

    back () {
      this.backEvent.emit(true);
    }

    ngOnDestroy () {
        this.releaseScrollLock();
    }
}
