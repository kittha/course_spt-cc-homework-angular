import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface LastestOrders {
  order: number;
  orderstatus: string;
  customer: string;
}

const LASTEST_ORDERS_DATA: LastestOrders[] = [
  {order: 5, orderstatus: 'Complete', customer: 'Victoria Terces (victoria_victoria@nopCommerce.com)'},
  {order: 4, orderstatus: 'Processing', customer: 'Victoria Terces (victoria_victoria@nopCommerce.com)'},
  {order: 3, orderstatus: 'Pending', customer: 'Victoria Terces (victoria_victoria@nopCommerce.com)'},
  {order: 2, orderstatus: 'Pending', customer: 'Victoria Terces (victoria_victoria@nopCommerce.com)'},
  {order: 1, orderstatus: 'Processing', customer: 'Victoria Terces (victoria_victoria@nopCommerce.com)'},
];

@Component({
  selector: 'app-lastest-orders',
  templateUrl: './lastest-orders.component.html',
  styleUrls: ['./lastest-orders.component.css']
})
export class LastestOrdersComponent implements AfterViewInit {
  displayedColumns: string[] = ['order', 'orderstatus', 'customer'];
  dataSource = new MatTableDataSource<LastestOrders>(LASTEST_ORDERS_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}