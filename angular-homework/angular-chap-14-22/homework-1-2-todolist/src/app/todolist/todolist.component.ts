import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  newTask: string;
  newDescription: string;
  displayState: boolean;
  selectedObj: string;
  taskObj: any;
  tasksObjArr: any;

  constructor() { 
    this.newTask = '';
    this.newDescription = '';
    this.displayState = false;
    this.selectedObj = '';
    this.tasksObjArr = [];
  }

  ngOnInit(): void {
  }

  addTask(event) {
    this.taskObj = {
        taskname: this.newTask,
        description: this.newDescription,
        // placeholder for further upgrade eg.description, calendar, remainder, etc.
    }
    this.tasksObjArr.push(this.taskObj);
    this.newTask = '';
    this.newDescription = '';
    event.preventDefault();
  }

  deleteTask(index) {
    this.tasksObjArr.splice(index, 1);
  }

  selectTask(i) {
    this.displayState = true;
    this.selectedObj = this.tasksObjArr[i];
  }

}
