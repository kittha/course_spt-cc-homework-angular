import { Component, OnInit } from '@angular/core';

export interface OrderTotalsElement {
  orderstatus: string;
  today: number;
  thisweek: number;
  thismonth: number;
  thisyear: number;
  alltime: number;
}

const ELEMENT_DATA: OrderTotalsElement[] = [
  {orderstatus: 'Pending', today: 0, thisweek: 0, thismonth: 0, thisyear: 0, alltime: 2468.80},
  {orderstatus: 'Processing', today: 0, thisweek: 0, thismonth: 0, thisyear: 0, alltime: 1957},
  {orderstatus: 'Complete', today: 0, thisweek: 0, thismonth: 0, thisyear: 0, alltime: 43.50},
  {orderstatus: 'Cancelled', today: 0, thisweek: 0, thismonth: 0, thisyear: 0, alltime: 0},
];

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.css']
})
export class OrderTotalsComponent implements OnInit {
  displayedColumns: string[] = ['orderstatus', 'today', 'thisweek', 'thismonth', 'thisyear', 'alltime'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
