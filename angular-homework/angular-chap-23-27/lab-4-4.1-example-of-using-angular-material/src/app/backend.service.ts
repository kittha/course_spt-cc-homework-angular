import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getProducts(): Product[] {
    // alert(`get products`);
    // console.log(`getProducts() is called`);
    // console.log(PRODUCTS);
    return PRODUCTS;
  }

  getProductById(): void {
    // alert(`get product by id`);
    // console.log(`getProductById() is called`);
  }
}
