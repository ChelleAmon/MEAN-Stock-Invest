import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { createUser } from 'src/app/store/actions/user/user.actions';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent {

  userForm: FormGroup;
  successMessage: any;
  errorMessage: any;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {

  this.userForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(3)]],
    lastName: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.email, this.validateEmail] ],
    password: ["", Validators.compose([
      Validators.required, Validators.minLength(5), this.validatePwd])
    ],
  });
  }

  hide:boolean = true;

  validateEmail(email: any){
    let EA = /^\S+@\S+$/;
      return EA.test(email.value)
        ? null
        : {
          emailError: 'Email is invalid',
        }
  };

  validatePwd(password: any){
    let re = /[a-zA-Z]*[0-9]{1}/;
    return re.test(password.value)
      ? null
      : {
        pwdError: 'Password should have at least 1 number',
      }
  }

  // userObj: any;
  // userDetails: any;

  createAccount(){
    // this.userObj = {
    //   firstName: this.userForm.value.firstName,
    //   lastName: this.userForm.value.lastName,
    //   email: this.userForm.value.email,
    //   password: this.userForm.value.password,
    // };

     if(this.userForm.valid){
      this.store.dispatch(createUser({data: this.userForm.value}))
      this._snackBar.open('Registration successful! ', '❎', {
        duration: 2000,
      });
      // sessionStorage.setItem('loggedIn', 'true')
      // sessionStorage.setItem('firstname', this.userDetails.firstName);
      // sessionStorage.setItem('lastname', this.userDetails.lastName);
      // sessionStorage.setItem('email', this.userDetails.email);
      // this.router.navigate([''])

    }else{
      this._snackBar.open('One or more fields are invalid. Try again ', '❎', {
        duration: 2000})
    }

  }

}
