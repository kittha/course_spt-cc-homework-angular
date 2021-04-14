import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LabHomeComponent } from './lab/labhome.component';
import { Lab4Component } from './lab/lab4/lab4.component';

// import { homedir } from 'node:os';

@NgModule({
  declarations: [
    AppComponent,

    LabHomeComponent,
    Lab4Component,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
