import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { logOutUser } from 'src/app/store/actions/user/user.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private store: Store<AppState>) { }

  firstName: any;

  @Input()
   loggedIn: any;

  ngOnInit(): void {
    this.firstName = sessionStorage.getItem("firstName");
    this.loggedIn = sessionStorage.getItem("loggedIn");

    if (this.loggedIn = "true"){
      this.loggedIn=true;
    }
  }

  reload(){
    window.location.reload();
  }

  logOut(){
    this.loggedIn = false;
    this.store.dispatch(logOutUser())
  }

}
