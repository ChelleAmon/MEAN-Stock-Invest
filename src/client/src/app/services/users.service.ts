import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../../../../shared/models/user.model'
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private api: ApiService, private router: Router) {}

  getUsers(){
    return this.api.get<{data: User[]}>('users').pipe(map(res => res.data));
  }

  createAccount(user: User){
    return this.api.post<{data: User}, User>('create-Account', user).pipe(map(res => res.data))
  }

  loginUser(user: Partial<User>){
    return this.api.post<{data: User}, Partial<User>>('user-login', user).pipe(map(res => res.data))
  }

  checkLogin(){
    return this.api.get<User>('check-login')
  }

  loginNavigate(){
    return of(this.router.navigate(['Home-Search']))
  }

  navigateToLogin(){
    return of(this.router.navigate(["./Let's-get-started/login-account"]))
  }

  logOut() {
    this.router.navigate(['/'])
    return this.api.get('user-logout')
  }
}
