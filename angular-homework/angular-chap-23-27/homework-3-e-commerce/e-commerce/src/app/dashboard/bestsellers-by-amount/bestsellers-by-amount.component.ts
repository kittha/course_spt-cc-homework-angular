import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PRODUCT {
  name: string;
  totalquantity: number;
  totalamountexcltax: number;
  view: string;
}

const PRODUCTS_DATA: PRODUCT[] = [
  {name: 'Vintage Style Engagement Ring', totalquantity: 1, totalamountexcltax: 2100, view: 'View'},
  {name: 'Apple iCam', totalquantity: 1, totalamountexcltax: 1300, view: 'View'},
  {name: 'Leica T Mirrorless Digital Camera', totalquantity: 1, totalamountexcltax: 530, view: 'View'},
  {name: 'Flower Girl Bracelet', totalquantity: 1, totalamountexcltax: 360, view: 'View'},
  {name: 'First Prize Pies', totalquantity: 1, totalamountexcltax: 51, view: 'View'},
  {name: 'Levi\'s 511 Jeans', totalquantity: 1, totalamountexcltax: 43.5, view: 'View'},
  {name: 'Fahrenheit 451 by Ray Bradbury', totalquantity: 1, totalamountexcltax: 27.00, view: 'View'},
  {name: '$25 Virtual Gift Card', totalquantity: 1, totalamountexcltax: 25, view: 'View'},
  {name: 'Pride and Prejudice', totalquantity: 1, totalamountexcltax: 24, view: 'View'},
  {name: 'If You Wait (donation)', totalquantity: 1, totalamountexcltax: 3.00, view: 'View'},
  {name: 'Science & Faith', totalquantity: 1, totalamountexcltax: 3.00, view: 'View'},
  {name: 'Night Visions', totalquantity: 1, totalamountexcltax: 2.80, view: 'View'},
];

@Component({
  selector: 'app-bestsellers-by-amount',
  templateUrl: './bestsellers-by-amount.component.html',
  styleUrls: ['./bestsellers-by-amount.component.css']
})
export class BestsellersByAmountComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'totalquantity', 'totalamountexcltax', 'view'];
  dataSource = new MatTableDataSource<PRODUCT>(PRODUCTS_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}

