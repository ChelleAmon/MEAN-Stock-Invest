import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { loginUser } from 'src/app/store/actions/user/user.actions';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.scss']
})
export class LoginAccountComponent {

  form: FormGroup;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    ){
     this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
  }


  submit() {
      this.store.dispatch(loginUser({data: this.form.value}))
      alert("User is signed in!")
  }



}

