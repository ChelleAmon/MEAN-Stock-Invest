import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddAccountComponent } from './modules/components/add-account/add-account.component';
import { HomeComponent } from './pages/home/home.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { LoginAccountComponent } from './modules/components/login-account/login-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    UserLoginComponent,
    HomeComponent,
    LoginAccountComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
