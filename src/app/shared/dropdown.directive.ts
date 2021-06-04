import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({ 
    selector: '[appDropdown]' 
})

export class DropdownDirective {
    @HostBinding('class.open') isOpened = false;

    constructor(private elRef: ElementRef) {}

    @HostListener('document:click', ['$event']) mouseclick(eventData: Event){
        this.isOpened = this.elRef.nativeElement.contains(eventData.target);
    }
}