import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hmwk1-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    @Input()
    title: string;
    description: string;

    
    
    constructor() {
        this.description = 'This is description.';
    }


}