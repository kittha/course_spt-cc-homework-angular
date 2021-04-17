import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface KEYWORD {
  keyword: string;
  count: number;
}

const KEYWORDS_DATA: KEYWORD[] = [
  {keyword: 'computer', count: 34},
  {keyword: 'camera', count: 30},
  {keyword: 'jewelry', count: 27},
  {keyword: 'shoes', count: 26},
  {keyword: 'jeans', count: 19},
  {keyword: 'gift', count: 10},
];

@Component({
  selector: 'app-popular-search-keywords',
  templateUrl: './popular-search-keywords.component.html',
  styleUrls: ['./popular-search-keywords.component.css']
})
export class PopularSearchKeywordsComponent implements AfterViewInit {
  displayedColumns: string[] = ['keyword', 'count'];
  dataSource = new MatTableDataSource<KEYWORD>(KEYWORDS_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
