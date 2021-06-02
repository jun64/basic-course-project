import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-page',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor() { }
    collapsed = true;

    ngOnInit() { }
}