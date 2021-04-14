import { Injectable } from '@angular/core';
import { ExchangeRates } from './exchange-rates';
// import { EXCHANGERATES } from '../assets/mock-exchange-rates';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  posts: any = null;

  // endpoint = 'convert';
  apiKey:string = 'b6dbcc4360fbc619562619209e6fb4c1'; // always reset API Access key before upload to remote repo; next plan -> hide and dynamically set api keys as seperate part.

  constructor(private httpClient: HttpClient) {
    // this.getRates().subscribe(result => {
    //   // console.log(posts);
    //   this.posts = result as any;
    // });
  }

  getRates(): Observable<any> {
    return this.httpClient.get('http://localhost:4200/assets/mock-exchange-rates2.json', {responseType: 'json'});
    // return this.httpClient.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${this.apiKey}`)
  }
  
  // REMARK
  // FREE API Can't use conversion
  // xxx DON'T USE THIS xxx --> return this.httpClient.get(`http://api.exchangeratesapi.io/v1/${this.endpoint}?access_key=${this.apiKey}&from=${this.baseCurrency}&to=${this.targetCurrency}&amount=${this.amount}`) <-- error "Access Restricted - Your current Subscription Plan does not support this API Function. <-- xxx DON't USE THIS xxx."
  // FREE API Can't choose base Currency, I got status 404 bad request if change from base=EUR to base=USD

}
