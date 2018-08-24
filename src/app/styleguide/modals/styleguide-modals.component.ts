import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'styleguide-modals',
    templateUrl: './styleguide-modals.component.html',
    styleUrls: ['./styleguide-modals.component.scss']
})
export class StyleguideModalsComponent implements OnInit {
    ModalSizeBodyHeight11: any;
    ModalSizeBodyHeight10: any;
    ModalSizeBodyHeight9: any;
    ModalSizeBodyHeight8: any;
    ModalSizeBodyHeight7: any;
    ModalSizeBodyHeight2: any;
    ModalSizeBodyHeight6: any;
    modalSize1 = false;
    modalSize2 = false;
    modalSize3 = false;
    modalSize4 = false;
    modalSize5 = false;
    modalSize12 = false;

    option1 = true;
    option2 = true;
    option3 = false;
    option4 = true;
    showHeader = true;
    hideBorderTop = false;

    options = [
        { name: 'Option 1' },
        { name: 'Option 2' },
        { name: 'Option 3' },
        { name: 'Option 4' },
    ];

    constructor() { }

    ngOnInit() { }

    close() {
        alert('close!');
    }
    submit() {
        alert('submit!');
    }
    cancel() {
        alert('cancel!');
    }
    open() {
        alert('open!');
    }

    getModalsize () {
     let modalSize = '';

     if (this.modalSize1) {
        modalSize += ' auto '
     }
     if (this.modalSize12) {
        modalSize += ' top-10vh '
     }
     if (this.modalSize2) {
        modalSize += ' top-20vh '
     }
     if (this.modalSize3) {
        modalSize += ' top-30vh '
     }
     if (this.modalSize4) {
        modalSize += ' modal-medium '
     }
     if (this.modalSize5) {
        modalSize += ' modal-large '
     }

     return modalSize;

    }

    getModalSizeBodyHeight () {
        let ModalSizeBodyHeight = '';

     if (this.ModalSizeBodyHeight6) {
        ModalSizeBodyHeight += ' modal-body-v25 '
     }
     if (this.ModalSizeBodyHeight7) {
        ModalSizeBodyHeight += ' modal-body-v50 '
     }
     if (this.ModalSizeBodyHeight8) {
        ModalSizeBodyHeight += ' modal-body-v75 '
     }
     if (this.ModalSizeBodyHeight9) {
        ModalSizeBodyHeight += ' small '
     }
     if (this.ModalSizeBodyHeight10) {
        ModalSizeBodyHeight += ' medium '
     }
     if (this.ModalSizeBodyHeight11) {
        ModalSizeBodyHeight += ' large '
     }

     return ModalSizeBodyHeight;
    }
}
