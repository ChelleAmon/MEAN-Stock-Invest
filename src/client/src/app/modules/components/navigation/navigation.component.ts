import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  firstName: any;

  @Input()
   loggedIn: any;

  ngOnInit(): void {
    this.firstName = sessionStorage.getItem("firstName");
    this.loggedIn = sessionStorage.getItem("loggedIn");

    if (this.loggedIn = "true"){
      this.loggedIn=true
    }
  }

  reload(){
    window.location.reload();
  }

}
