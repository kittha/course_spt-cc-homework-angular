import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './catalog/product-list/product-list.component'
import { BackendService } from './backend.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  constructor(
    private backendService: BackendService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  // @ViewChild('productList')
  // productList: ProductListComponent;

  ngOnInit(): void {
    // this.backendService.getProducts();
    // this.backendService.getProductById();
    // this.productList.products = this.backendService.getProducts();
  }

  // ngAfterViewInit(): void {
  //   // this.productList.products = [
  //   // {
  //   //   name: 'ส้มโอ',
  //   //   price: 990
  //   // },
  //   // {
  //   //   name: 'แตงโม',
  //   //   price: 1000
  //   // },
  //   // {
  //   //   name: 'มะพร้าวน้ำหอม',
  //   //   price: 550
  //   // }
  //   // ];
  //   // this.productList.products = this.backendService.getProducts();
  // }

}