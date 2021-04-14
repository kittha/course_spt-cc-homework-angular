import { Component } from '@angular/core';

@Component({
    selector: 'app-hmwk2-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})

export class ToDoListComponent {
    newTask: string;
    taskObj: any;
    tasksObjArr: any;
        
    constructor() {
        this.newTask = '';
        this.tasksObjArr = [];
    }

    addTask(event) {
        this.taskObj = {
            taskname: this.newTask,
            // placeholder for further upgrade eg.description, calendar, remainder, etc.
        }
        this.tasksObjArr.push(this.taskObj);
        this.newTask = '';
        event.preventDefault();
    }

    deleteTask(index) {
        this.tasksObjArr.splice(index, 1);
    }

}
