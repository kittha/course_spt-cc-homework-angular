// bad-angular.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-bad-angular',
  template: `
    <div>
      <h1>Bad Angular Component</h1>
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>
    </div>
  `
})
export class BadAngularComponent {
  items: number[] = [];

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    // O(n^2) complexity: nested loops with bad performance
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 10000; j++) {
        this.items.push(i + j);
      }
    }
  }

  ngOnInit() {
    // Duplicate logic, can be reduced or optimized
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push(i);
    }

    // Unnecessary large loop causes bad performance
    for (let i = 0; i < 1000000; i++) {
      console.log(i); // Logging unnecessary iterations
    }

    // Duplicate code for looping through the items array
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }

    // Bad practice: directly modifying DOM with setTimeout
    setTimeout(() => {
      const listElement = document.querySelector('ul');
      if (listElement) {
        listElement.innerHTML = ''; // Direct DOM manipulation
        this.items.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = item.toString();
          listElement.appendChild(listItem);
        });
      }
    }, 1000);

    // Code that could be refactored into reusable functions
    for (let i = 0; i < 1000; i++) {
      console.log('Repeated logic'); // Duplicate logic
    }
    for (let i = 0; i < 1000; i++) {
      console.log('Repeated logic'); // Duplicate logic
    }
  }
}

