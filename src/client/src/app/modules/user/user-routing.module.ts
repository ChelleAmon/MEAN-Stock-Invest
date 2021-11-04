import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from 'src/app/pages/user-login/user-login.component';
import { AddAccountComponent } from '../components/add-account/add-account.component';
import { LoginAccountComponent } from '../components/login-account/login-account.component';

const routes: Routes = [
  {path:'create-account', component: AddAccountComponent},
  {path:'login-account', component: LoginAccountComponent},
  {path: 'User-Account', component: UserLoginComponent},
  {path: '', redirectTo: 'login-account',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
