import {Component, OnInit} from '@angular/core';
import {CurrencyService} from './currency.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  exchanges = [];
  currentCurrency = 'EUR';
  currentAmount = 1;

  constructor(private currencyService: CurrencyService) {
    // this.exchanges = currencyService.getAllAsArray();
  }

  ngOnInit() {
    // İlk listelemeyi yaptıralım
    this.onCurrencyClick(this.currencyService.getData(this.currentCurrency));
  }

  onAmountChange(newAmount) {
    newAmount = Number(newAmount);

    if (newAmount > 0) {
      this.currentAmount = newAmount;
      console.log(newAmount);

      for (let i = 0; i < this.exchanges.length; i++) {
        const newRate = this.exchanges[i].rateOrigin * this.currentAmount;
        this.exchanges[i].rate = newRate.toFixed(4);
      }
    }
  }

  onCurrencyClick(currency) {
    this.currentCurrency = currency.code;

    this.currencyService.getRatesOf(currency.code).subscribe(
      (response: Response) => {
        // değerleri sıfırlasın
        this.exchanges = [];

        // Gelen cevabı json nesnesine çevirelim
        const responseJson = response.json();

        for (const ratedCode in responseJson.rates) {
          if (responseJson.rates.hasOwnProperty(ratedCode)) {
            const ratedData = this.currencyService.getData(ratedCode);
            if (typeof ratedData !== 'undefined') {
              ratedData.rateOrigin = responseJson.rates[ratedCode];
              const newRate = responseJson.rates[ratedCode] * this.currentAmount;
              ratedData.rate = newRate.toFixed(4);
              this.exchanges.push(ratedData);
            }
          }
        }
      }
    );
  }
}
