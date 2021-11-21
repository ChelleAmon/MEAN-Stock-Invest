import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
    constructor(private api: ApiService, private http:HttpClient) { }

  getHistoricalData(name: string): Observable<any>{
    return this.http.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${name}&market=CNY&apikey=YBHQYZO232RKAWR1`)
  }

  getHistoricalDataMonthly(name: string): Observable<any>{
    return this.http.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${name}&market=CNY&apikey=YBHQYZO232RKAWR1`)
    // return this.http.get("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol="+name+"&market=CNY&apikey=0810B66ZW6LV5TTU")
  }

  getHistoricalDataWeekly(name:string): Observable<any>{
    return this.http.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=${name}&market=CNY&apikey=YBHQYZO232RKAWR1`)

  }
}
