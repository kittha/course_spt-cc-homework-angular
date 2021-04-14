import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any;
  apiKey:string = 'b6dbcc4360fbc619562619209e6fb4c1'; // always reset API Access key before upload to remote repo; next plan -> hide and dynamically set api keys as seperate part.
  // baseCurrency:string = 'EUR';
  // targetCurrency:string = 'GBP,JPY,USD';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient
    .get('http://localhost:4200/assets/mock-exchange-rates2.ts', {responseType: 'json'})
    .subscribe(result => {
      this.posts = result as any;
    });
  }
  
}

// .get(`http://api.exchangeratesapi.io/v1/latest?access_key=${this.apiKey}&base=${this.baseCurrency}&symbols=${this.targetCurrency}`)