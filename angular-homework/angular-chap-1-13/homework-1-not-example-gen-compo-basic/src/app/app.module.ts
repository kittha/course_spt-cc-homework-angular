import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { HomeComponent } from './homework/homework1/home/home.component';
import { CategoryMenuComponent } from './homework/homework1/home/categorymenu/categorymenu.component';
import { TopbannerComponent } from './homework/homework1/home/topbanner/topbanner.component';
import { NavbarComponent } from './homework/homework1/home/navbar/navbar.component';
import { SearchbarComponent } from './homework/homework1/home/navbar/searchbar/searchbar.component';


// import { homedir } from 'node:os';

@NgModule({
  declarations: [
    AppComponent,


    HomeComponent,
    CategoryMenuComponent,
    TopbannerComponent,
    NavbarComponent,
    SearchbarComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
