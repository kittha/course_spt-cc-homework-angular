import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '', redirectTo: '/main-content', pathMatch: 'full'},
  // {path: 'main-content', component: MainContentComponent},
  // {path: 'product-list', component: ProductListComponent},
  // {path: 'products/:id', component: ProductListComponent},
  // {path: '**', component: MainContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
