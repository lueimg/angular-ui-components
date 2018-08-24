import { Component, OnInit, Directive, Input, EventEmitter, Output, ViewChild,
  ElementRef, HostListener, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

export type ModalClass = 'top-10vh' | 'top-20vh' | 'top-30vh' | string;
export type ModalSize = 'auto' | 'modal-medium' | 'modal-large' | string;
export type ModalSizeBodyHeight = 'small' | 'medium' | 'large' | 'modal-body-v25' | 'modal-body-v50' | 'modal-body-v75' | string;
export type TitleAlign = 'align-left' | string;
/**
 *
 * * use attributes instead of directives
 *
 * <ui-modal>
 *  <div modal-header>...</div>
 *  <div modal-content>...</div>
 *  <div modal-footer>...</div>
 * </ui-modal>
 */
@Component({
    selector: 'ui-modal',
    templateUrl: './ui-modal.component.html',
    styleUrls: ['./scss/base.scss']
})
export class UiModalComponent implements OnInit, OnDestroy {

    isOpened: boolean = false;
    body: HTMLElement;
    // Inputs
    @Input() modalSize: ModalSize;
    @Input() modalSizeBodyHeight: ModalSizeBodyHeight;
    @Input() modalClass: ModalClass;
    @Input() closeOnEscape: boolean = true;
    @Input() closeOnOutsideClick: boolean = true; // not implemented
    @Input() title: string;
    @Input() titleAlign: TitleAlign;
    @Input() hideCloseButton: boolean = false;
    @Input() closeCallback: () => boolean; // True to close modal, or False to avoid closing modal
    @Input() submitButtonLabel: string;
    @Input() submitButtonStyle: string = 'standard';
    @Input() cancelButtonLabel: string; // It must include (onClose)="action()"
    @Input() cancelButtonStyle: string = 'cancel';
    @Input() showFooter: boolean = true;
    @Input() showHeader: boolean = true;
    @Input() hideBorderTop: boolean = false;

    @Output() onOpen: EventEmitter<any> = new EventEmitter<any>(false);
    @Output() onClose: EventEmitter<any> = new EventEmitter<any>(false);
    @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>(false);
    @Output() onCancel: EventEmitter<any> = new EventEmitter<any>(false);

    @ViewChild('modalRoot')  modalRoot: ElementRef;

    constructor(@Inject(DOCUMENT) private document: Document) { }

    ngOnInit() {
        this.body = this.document.getElementsByTagName('body')[0];
        this.createBackDrop();
    }

    addScrollLock () {
        this.body.classList.add('scroll-lock');
    }

    releaseScrollLock() {
        this.body.classList.remove('scroll-lock');
    }

    createBackDrop() {
        const backdropElement = this.document.createElement('div');
        backdropElement.classList.add('modal-backdrop', 'fade', 'in');
    }

    submit() {
        this.onSubmit.emit(undefined);
        this.releaseScrollLock();
    }

    cancel () {
        this.onCancel.emit();
        this.releaseScrollLock();
    }

    open(...args: any[]) {
        this.isOpened = true;
        this.onOpen.emit(args);
        setTimeout(() => this.modalRoot.nativeElement.focus(), 0);
        this.addScrollLock();
    }

    close(...args: any[]) {
        this.isOpened = this.closeCallback ? !this.closeCallback() : false;
        if (!this.isOpened) {
            this.onClose.emit(args);
            this.releaseScrollLock();
        }
    }

    // todo: Refactor with lazy listener
    @HostListener('document:keydown', ['$event'])
    onKeydownHandler(event: KeyboardEvent) {
        if (event.key === 'Escape' && this.closeOnEscape && this.isOpened) {
            this.close();
        }
    }

    ngOnDestroy () {
        // We need to be sure there is no scroll-lock already,
        // e.g. change a route without refresh
        this.releaseScrollLock();
    }

}
