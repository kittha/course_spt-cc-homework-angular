import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { ToDoListComponent } from './homework/homework2/todolist.component';


// import { homedir } from 'node:os';

@NgModule({
  declarations: [
    AppComponent,

    ToDoListComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
