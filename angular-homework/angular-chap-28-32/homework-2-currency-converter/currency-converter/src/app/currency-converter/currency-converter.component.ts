import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExchangeRatesService } from '../exchange-rates.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  @Input() title: string;
  form: FormGroup
  cache: any;

  currencyList: string[] = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMK", "ZMW", "ZWL"]; // country code (ISO 4217 format)
  baseCurrency:string;
  baseCurrencyList:string[] = this.currencyList;
  targetCurrency:string;
  targetCurrencyList:string[] = this.currencyList;

  baseAmount: number;
  targetAmount: number;
  basePairFxRate: any;
  targetPairFxRate: any;


  constructor(
    private exchangeRatesService: ExchangeRatesService,
    private fb: FormBuilder,
    ) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      baseAmount: [null, [Validators.required, Validators.pattern(/[+-]?([0-9]*[.])?[0-9]+/)] ],
      baseCurrency: [null],
      targetCurrency: [null],
      targetAmount: [null],
    });
    this.downloadCache();
  }
  
  downloadCache() {
    this.exchangeRatesService.getRates().subscribe(result => {
      // console.log(`result is ${result}`);
      console.log(`ping`);
      console.log(result);
      this.cache = result as any;
    });
  }

  convert(): void {
    console.log(`pong`);
    console.log( JSON.stringify(this.form.value) );
    // GET USER INPUT: BASE AMOUNT & BASE CURRENCY & TARGET CURRENCY
    // SELECT USER INPUT: BASE CURRENCY: CHOOSE RELATED EUR-BASERATE (eg. EUR-USD rate, EUR-THB rate, etc.)
    let baseMatch: string = this.form.value.baseCurrency;
    this.basePairFxRate = Object.entries(this.cache)[4][1][baseMatch];
    // SELECT USER INPUT: TARGET CURRENCY: CHOOSE RELATED EUR-TARGETRATE (eg. EUR-USD rate, EUR-THB rate, etc.)
    let targetMatch: string = this.form.value.targetCurrency;
    this.targetPairFxRate = Object.entries(this.cache)[4][1][targetMatch];
    // PRINT TO CONSOLE: CROSS CHECK EUR-BASERATE & EUR-TARGETRATE
    console.log(`EUR to ${baseMatch} is ${this.basePairFxRate}`);
    console.log(`EUR to ${targetMatch} is ${this.targetPairFxRate}`);
    
    // BASIC EXCHANGE RATE CONVERTER Function: targetAmount = baseAmount * fxRate
    // CROSS RATE PAIRING = BASERATE-EUR * EUR-TARGETRATE = 1/(EUR-BASERATE) * EUR-TARGETRATE
    // CROSS RATE CALCULATOR CONVERTER Function: targetAmount = baseAmount * crossrate
    // CROSS RATE CALCULATOR CONVERTER Function: targetAmount = baseAmount * ( 1/basePairFxRate) * targetPairFxRate
    // TARGET AMOUNT = BASE AMOUNT * CROSS RATE PAIRING
    this.form.value.targetAmount = +this.form.value.baseAmount * (1/this.basePairFxRate) * this.targetPairFxRate;
    console.log(`targetAmount is ${this.form.value.targetAmount}`);
  }
  
}
