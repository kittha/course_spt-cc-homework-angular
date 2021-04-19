import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  apiKey:string = 'b6dbcc4360fbc619562619209e6fb4c1'; // always reset API Access key before upload to remote repo; next plan -> hide and dynamically set api keys as seperate part.

  constructor(private httpClient: HttpClient) {
  }

  getRates(): Observable<any> {
    // uncomment 1 line of code below if you want to use mock fx data.
    return this.httpClient.get('http://localhost:4200/assets/mock-exchange-rates2.json', {responseType: 'json'});
    // comment 1 line of code above & uncomment 1 line of code below if you want to use lastest data (but you need to update apikey).
    // return this.httpClient.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${this.apiKey}`)
  }

}
