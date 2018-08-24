import { Component, ChangeDetectionStrategy, Input, ViewChild, ElementRef,
    AfterViewInit, OnInit, EventEmitter, Output, HostListener, Inject, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { OnDestroy } from '@angular/core';

export type PositionInput = '' | 'right' | 'bottom' | 'right bottom' | 'left' | 'top' | 'left top' | 'left bottom' | 'right top';
export interface IOptionObject {
    name: string;
    value: any;
}
export type Option = IOptionObject | string;
export const UI_OVERFLOW_MENU_DIVIDER = 'divider';

@Component({
    selector: 'ui-overflow-menu',
    templateUrl: './ui-overflow-menu.component.html',
    styleUrls: ['./ui-overflow-menu.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: UiOverflowMenuComponent,
        multi: true
    }],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiOverflowMenuComponent implements AfterViewInit , ControlValueAccessor, OnDestroy {
    addListener: () => void;
    removeLIstener: () => any;
    element: HTMLElement;
    elementWith = 200; // 200px is defined in the .scss file
    elementHeight = 80; //  80px is defined in the .scss file
    menuActive = false;
    value: Option;
    UI_OVERFLOW_MENU_DIVIDER = UI_OVERFLOW_MENU_DIVIDER;
    @Input() position: PositionInput = '';
    @Input() options: Option[] = [];
    @Input() showInContent = false;
    @Input() closeOnSelect = false;
    @Input() showSelectedIcon = true;
    @Input() openOnClick = false;
    @Output() clickOptionEvent = new EventEmitter<Option>();

    @ViewChild('container') container: ElementRef;
    propagateChange: Function = () => null;

    constructor (private elementRef: ElementRef,
                 @Inject(DOCUMENT) private document: any,
                 private cdr: ChangeDetectorRef) {}

    ngAfterViewInit () {
        this.element = this.container.nativeElement;
        this.elementWith = this.element.offsetWidth;
        this.elementHeight = this.element.offsetHeight;
        if (this.position.search(/left/) > -1) {
            const defaultLeft = 10;
            const leftPosition = this.elementWith - defaultLeft;
            this.element.style.left = `-${leftPosition}px`;
        }
        if (this.position.search(/top/) > -1) {
            const defaultLeft = 10;
            const TopPosition = this.elementHeight - defaultLeft;
            this.element.style.top = `-${TopPosition}px`;
        }

        if (this.openOnClick) {
            // Lazy Listener to avoid too much detect changes cycles
            this.createLazylistener();
        }
    }

    createLazylistener () {
        this.addListener = () => {
            const listenerFn = (event) => {
                if (!this.elementRef.nativeElement.contains(event.target)) {
                    this.closeMenu();
                    this.cdr.detectChanges();
                }
            };
            this.document.addEventListener('click', listenerFn );
            this.removeLIstener = () => this.document.removeEventListener('click', listenerFn);
        };
    }

    onClickOption (option: Option) {
        this.value = option;
        this.clickOptionEvent.emit(this.value);
        this.propagateChange(option);

        if (this.closeOnSelect) {
            this.closeMenu();
        }
    }

    openMenu () {
        this.menuActive = true;

        if (this.openOnClick && this.addListener) {
            this.addListener();
        }
    }

    closeMenu () {
        this.menuActive = false;

        if (this.openOnClick && this.removeLIstener) {
            this.removeLIstener();
        }
    }

    toggleMenu () {
        if (this.openOnClick) {
            this.menuActive ? this.closeMenu() : this.openMenu();
        }
    }

    optionName (option: Option) {
        if (typeof option === 'string') {
            return option === this.UI_OVERFLOW_MENU_DIVIDER ? '' : option;
        } else {
            return option.name || option.value;
        }
    }

    isOptionActive (option) {
        if (!this.value) {
            return false;
        }
        if (typeof option === 'string' && typeof this.value === 'string') {
            return option === this.UI_OVERFLOW_MENU_DIVIDER ? false : option === this.value;
        } else if (typeof this.value !== 'string' && typeof option !== 'string') {
            return option.value === this.value.value;
        } else {
            return false;
        }
    }

    onMouseover () {
        if (!this.openOnClick) {
            this.openMenu();
        }

    }
    onMouseout () {
        if (!this.openOnClick) {
            this.closeMenu();
        }
    }

    writeValue(obj: Option): void {
        this.value = obj;
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any): void {}

    setDisabledState?(isDisabled: boolean): void {}

    ngOnDestroy () {
        if (this.removeLIstener) {
            this.removeLIstener();
        }
    }
}
