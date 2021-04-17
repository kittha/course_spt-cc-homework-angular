import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatTreeModule } from '@angular/material/tree'; 
import { MatCardModule} from '@angular/material/card';  
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { OrderTotalsComponent } from './dashboard/order-totals/order-totals.component';
import { IncompleteOrdersComponent } from './dashboard/incomplete-orders/incomplete-orders.component';
import { LastestOrdersComponent } from './dashboard/lastest-orders/lastest-orders.component';
import { PopularSearchKeywordsComponent } from './dashboard/popular-search-keywords/popular-search-keywords.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ProductsComponent,
    OrderTotalsComponent,
    IncompleteOrdersComponent,
    LastestOrdersComponent,
    PopularSearchKeywordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTreeModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
