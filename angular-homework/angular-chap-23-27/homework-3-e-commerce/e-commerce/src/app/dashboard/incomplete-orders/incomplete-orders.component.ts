import { Component, OnInit } from '@angular/core';

export interface IncompleteOrdersElement {
  item: string;
  total: number;
  count: number;
}

const ELEMENT_DATA: IncompleteOrdersElement[] = [
  {item: 'Total unpaid orders (pending payment status)', total: 0, count: 2},
  {item: 'Total not yet shipped orders', total: 0, count: 2},
  {item: 'Total incomplete orders (pending order status)', total: 0, count: 2},
];

@Component({
  selector: 'app-incomplete-orders',
  templateUrl: './incomplete-orders.component.html',
  styleUrls: ['./incomplete-orders.component.css']
})
export class IncompleteOrdersComponent implements OnInit {
  displayedColumns: string[] = ['item', 'total', 'count'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
