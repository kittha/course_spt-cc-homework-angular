import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LabHomeComponent } from './lab/labhome.component';
import { CountingComponent } from './lab/counting/counting.component';
import { CTFComponent } from './lab/ctf/ctf.component';



// import { homedir } from 'node:os';

@NgModule({
  declarations: [
    AppComponent,

    LabHomeComponent,
    CountingComponent,
    CTFComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
