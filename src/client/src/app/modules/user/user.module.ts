import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from 'src/app/pages/user-login/user-login.component';
import { LoginAccountComponent } from '../components/login-account/login-account.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    LoginAccountComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

  ]
})
export class UserModule { }
