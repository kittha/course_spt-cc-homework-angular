import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {
  @ViewChild('productList')
  productList: ProductListComponent;

  // ngOnInit(): void {
  //   this.productList.products = [
  //   {
  //     name: 'ส้มโอ',
  //     price: 990
  //   },
  //   {
  //     name: 'แตงโม',
  //     price: 1000
  //   },
  //   {
  //     name: 'มะพร้าวน้ำหอม',
  //     price: 550
  //   }
  //   ];
  // }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.productList.products = [
        {
          name: 'ส้มโอ',
          price: 990
        },
        {
          name: 'แตงโม',
          price: 1000
        },
        {
          name: 'มะพร้าวน้ำหอม',
          price: 550
        }
        ];
    }, 0)
  }

  constructor() {}
}