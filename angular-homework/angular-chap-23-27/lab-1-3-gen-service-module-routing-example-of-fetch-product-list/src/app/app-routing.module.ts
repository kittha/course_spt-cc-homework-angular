import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './home/main-content/main-content.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/main-content', pathMatch: 'full'},
  {path: 'main-content', component: MainContentComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'products/:id', component: ProductListComponent},
  {path: '**', component: MainContentComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }
