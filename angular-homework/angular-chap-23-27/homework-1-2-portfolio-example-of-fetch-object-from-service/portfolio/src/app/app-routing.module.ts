import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'contact', component: ContactMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', component: AboutMeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
