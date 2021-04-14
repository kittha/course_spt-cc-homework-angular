import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-lab-ctf',
    templateUrl: './ctf.component.html',
    styleUrls: ['./ctf.component.css']
})

export class CTFComponent {
    @Input()
    title: string;
    description: string;

    count = 0;
    items = [1, 2 ,3 ,4 ,5];
    
    constructor() {
        this.description = 'This is description.';
    }

    countNumber() {
        this.count = this.count + 1;
    }
}