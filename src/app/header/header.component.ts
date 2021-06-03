import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header-page',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor() { }
    collapsed = true;

    @Output() selected = new EventEmitter<string>();

    ngOnInit() { }

    onClick(clickedMenu: string){
        this.selected.emit(clickedMenu);
    }
}