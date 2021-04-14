import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MainContentComponent,
    NavbarComponent, 
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    MainContentComponent,
    NavbarComponent,
  ]
})
export class HomeModule { }
