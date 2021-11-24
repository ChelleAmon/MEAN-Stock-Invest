import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { logOutUser } from 'src/app/store/actions/user/user.actions';
import { loginUserSelector } from 'src/app/store/selectors/user/user.selectors';
import { User } from '../../../../../../shared/models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
 loggedUser$: Observable<User | null>

  constructor(private router: Router, private store: Store<AppState>) {
  this.loggedUser$ = this.store.select(loginUserSelector)
   }

  firstName: any;

  @Input()
   loggedIn: any;

  ngOnInit(): void {
    // this.firstName = sessionStorage.getItem("firstName");
    // this.loggedIn = sessionStorage.getItem("loggedIn");

    // if (this.loggedIn = "true"){
    //   this.loggedIn=true;
    // }
  }

  reload(){
    window.location.reload();
  }

  logOut(){
    this.loggedIn = false;
    this.store.dispatch(logOutUser())
  }
}
