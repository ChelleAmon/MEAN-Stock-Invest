import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  constructor(private api:ApiService) {

   }

  getWatchList(id:any): Observable<any>{
    return this.api.get(`watchlist/${id}`);
  }

  addToWatch(id:string, code:string): Observable<any>{
    return this.api.update(`addtowatch/${id}/${code}`, "")
  }


  deleteWatch(id:string, code:string): Observable<any>{
  return this.api.delete(`deleteFromWatch/${id}/${code}`)
  }
}
