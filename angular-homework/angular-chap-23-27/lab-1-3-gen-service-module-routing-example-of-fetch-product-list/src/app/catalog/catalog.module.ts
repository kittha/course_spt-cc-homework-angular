import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { BackendService } from '../backend.service';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
  ],
  providers: [
    BackendService,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    ProductListComponent,
    ProductItemComponent,
  ]
})
export class CatalogModule { }
