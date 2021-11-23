import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  get<T>(source: string){
    return this.http.get<T>(this.baseUrl + source, {withCredentials: true})
  };

  post<T, D>(source:string, data: D){
    return this.http.post<T>(this.baseUrl + source, data, {withCredentials: true})
  };

  delete<T>(source:string){
    return this.http.delete<T>(this.baseUrl + source, {withCredentials: true})
  };

  update<T, D>(source:string, data: D){
    return this.http.put<T>(this.baseUrl + source, data, {withCredentials: true})
  };
}
