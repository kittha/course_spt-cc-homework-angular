import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hmwk3-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class Hmwk3HomeComponent {
    @Input()
    title: string;
    description: string;

    
    
    constructor() {
        this.description = 'This is description.';
    }


}