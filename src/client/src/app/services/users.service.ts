import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../../../../shared/models/user.model'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private api: ApiService) {}

  getUsers(){
    return this.api.get<{data: User[]}>('users').pipe(map(res => res.data));
  }

  createAccount(user: User){
    return this.api.post<{data: User}, User>('create-Account', user).pipe(map(res => res.data))
  }

  loginUser(user: User){
    return this.api.post<{data: User}, User>('user-login', user).pipe(map(res => res.data))
  }
}
