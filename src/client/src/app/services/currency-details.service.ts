import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDetailsService {

  constructor(private api: ApiService, private http:HttpClient) { }

  getMetadata(name: string): Observable<any>{
    return this.http.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${name}&market=CNY&apikey=YBHQYZO232RKAWR1`)
  }

  getOrders(name:string):Observable<any>{
    return this.api.get('ordersHistory/' + name.toLowerCase() + 'usdt');
  }

  getMarketHistory(name:string):Observable<any>{
    return this.api.get('marketsHistory/' + name.toLowerCase() + 'usdt');
  }
}
