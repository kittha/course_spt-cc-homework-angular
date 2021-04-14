import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-lab-lab4',
    templateUrl: './lab4.component.html',
    styleUrls: ['./lab4.component.css']
})

export class Lab4Component {
    @Input()
    num: number;
    numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    constructor() {}

}