import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CurrencyService {
  currencyData = {
    'EUR': {flag: 'https://www.dbs.com.sg/iwov-resources/images/rates/euro_flg.gif', code: 'EUR', name: 'Euro'},
    'USD': {flag: 'http://www.ecb.europa.eu/shared/img/flags/USD.gif', code: 'USD', name: 'US dollar'},
    'JPY': {flag: 'http://www.ecb.europa.eu/shared/img/flags/JPY.gif', code: 'JPY', name: 'Japanese yen'},
    'BGN': {flag: 'http://www.ecb.europa.eu/shared/img/flags/BGN.gif', code: 'BGN', name: 'Bulgarian lev'},
    'CZK': {flag: 'http://www.ecb.europa.eu/shared/img/flags/CZK.gif', code: 'CZK', name: 'Czech koruna'},
    'DKK': {flag: 'http://www.ecb.europa.eu/shared/img/flags/DKK.gif', code: 'DKK', name: 'Danish krone'},
    'GBP': {flag: 'http://www.ecb.europa.eu/shared/img/flags/GBP.gif', code: 'GBP', name: 'Pound sterling'},
    'HUF': {flag: 'http://www.ecb.europa.eu/shared/img/flags/HUF.gif', code: 'HUF', name: 'Hungarian forint'},
    'PLN': {flag: 'http://www.ecb.europa.eu/shared/img/flags/PLN.gif', code: 'PLN', name: 'Polish zloty'},
    'RON': {flag: 'http://www.ecb.europa.eu/shared/img/flags/RON.gif', code: 'RON', name: 'Romanian leu'},
    'SEK': {flag: 'http://www.ecb.europa.eu/shared/img/flags/SEK.gif', code: 'SEK', name: 'Swedish krona'},
    'CHF': {flag: 'http://www.ecb.europa.eu/shared/img/flags/CHF.gif', code: 'CHF', name: 'Swiss franc'},
    'NOK': {flag: 'http://www.ecb.europa.eu/shared/img/flags/NOK.gif', code: 'NOK', name: 'Norwegian krone'},
    'HRK': {flag: 'http://www.ecb.europa.eu/shared/img/flags/HRK.gif', code: 'HRK', name: 'Croatian kuna'},
    'RUB': {flag: 'http://www.ecb.europa.eu/shared/img/flags/RUB.gif', code: 'RUB', name: 'Russian rouble'},
    'TRY': {flag: 'http://www.ecb.europa.eu/shared/img/flags/TRY.gif', code: 'TRY', name: 'Turkish lira'},
    'AUD': {flag: 'http://www.ecb.europa.eu/shared/img/flags/AUD.gif', code: 'AUD', name: 'Australian dollar'},
    'BRL': {flag: 'http://www.ecb.europa.eu/shared/img/flags/BRL.gif', code: 'BRL', name: 'Brazilian real'},
    'CAD': {flag: 'http://www.ecb.europa.eu/shared/img/flags/CAD.gif', code: 'CAD', name: 'Canadian dollar'},
    'CNY': {flag: 'http://www.ecb.europa.eu/shared/img/flags/CNY.gif', code: 'CNY', name: 'Chinese yuan renminbi'},
    'HKD': {flag: 'http://www.ecb.europa.eu/shared/img/flags/HKD.gif', code: 'HKD', name: 'Hong Kong dollar'},
    'IDR': {flag: 'http://www.ecb.europa.eu/shared/img/flags/IDR.gif', code: 'IDR', name: 'Indonesian rupiah'},
    'ILS': {flag: 'http://www.ecb.europa.eu/shared/img/flags/ILS.gif', code: 'ILS', name: 'Israeli shekel'},
    'INR': {flag: 'http://www.ecb.europa.eu/shared/img/flags/INR.gif', code: 'INR', name: 'Indian rupee'},
    'KRW': {flag: 'http://www.ecb.europa.eu/shared/img/flags/KRW.gif', code: 'KRW', name: 'South Korean won'},
    'MXN': {flag: 'http://www.ecb.europa.eu/shared/img/flags/MXN.gif', code: 'MXN', name: 'Mexican peso'},
    'MYR': {flag: 'http://www.ecb.europa.eu/shared/img/flags/MYR.gif', code: 'MYR', name: 'Malaysian ringgit'},
    'NZD': {flag: 'http://www.ecb.europa.eu/shared/img/flags/NZD.gif', code: 'NZD', name: 'New Zealand dollar'},
    'PHP': {flag: 'http://www.ecb.europa.eu/shared/img/flags/PHP.gif', code: 'PHP', name: 'Philippine peso'},
    'SGD': {flag: 'http://www.ecb.europa.eu/shared/img/flags/SGD.gif', code: 'SGD', name: 'Singapore dollar'},
    'THB': {flag: 'http://www.ecb.europa.eu/shared/img/flags/THB.gif', code: 'THB', name: 'Thai baht'},
    'ZAR': {flag: 'http://www.ecb.europa.eu/shared/img/flags/ZAR.gif', code: 'ZAR', name: 'South African rand'}
  };

  constructor(private http: Http) {

  }

  getAllAsArray() {
    const dataAsArray = [];

    for (const d in this.currencyData) {
      if (this.currencyData.hasOwnProperty(d)) {
        dataAsArray.push(this.currencyData[d]);
      }
    }
    return dataAsArray;
  }

  getData(code: string) {
    return this.currencyData[code];
  }

  getRatesOf(code: string) {
    return this.http.get('http://api.fixer.io/latest?base=' + code);
  }
}
