import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/Admin', pathMatch: 'full'},
  {path: 'Admin', component: DashboardComponent},
  // {path: 'product-list', component: ProductListComponent},
  // {path: 'products/:id', component: ProductListComponent},
  {path: '**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
