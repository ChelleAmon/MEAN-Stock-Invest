import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../../../../shared/models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private api: ApiService) {}

  getUsers(){
    return this.api.get<{data: User[]}>('users');
  }

  createAccount(user: User){
    return this.api.post<{data: User}, User>('create-Account', user)
  }

  loginUser(user: User | Partial<User>){
    return this.api.post<{data: User}, User | Partial<User>>('user-login', user)
  }
}
