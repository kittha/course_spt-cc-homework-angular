import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Hmwk3HomeComponent } from './homework/homework3/home/home.component';
import { Hmwk3CategoryMenuComponent } from './homework/homework3/home/categorymenu/categorymenu.component';
import { Hmwk3TopLogoComponent } from './homework/homework3/home/navbar/toplogo/toplogo.component';
import { Hmwk3NavbarComponent } from './homework/homework3/home/navbar/navbar.component';
import { Hmwk3SearchbarComponent } from './homework/homework3/home/navbar/searchbar/searchbar.component';
import { Hmwk3TopRightMenuComponent } from './homework/homework3/home/navbar/top-right-menu/top-right-menu.component';

// import { homedir } from 'node:os';

@NgModule({
  declarations: [
    AppComponent,

    Hmwk3HomeComponent,
    Hmwk3CategoryMenuComponent,
    Hmwk3TopLogoComponent,
    Hmwk3TopRightMenuComponent,
    Hmwk3NavbarComponent,
    Hmwk3SearchbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
