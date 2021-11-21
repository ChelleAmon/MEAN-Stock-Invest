import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private api: ApiService) { }

  getPrices(): Observable<any>{
    return this.api.get<any>('getTickers');
  }
}
