import { Directive, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
    selector: '[clickOutside]',
})
export class ClickOutsideDirective {

    @Output() clickOutside: EventEmitter<void> = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    onClick(targetElement) {
        console.log('click');
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    }
    constructor(private elementRef: ElementRef) { }
}
