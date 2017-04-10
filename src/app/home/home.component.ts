import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log("check logged authenticated user", this.currentUser);
  }

  ngOnInit() {
  }
  currentUser:User;

  changeRoute() {
    if(this.currentUser == null) {
      this.router.navigate(['login']);
    } else {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
      this.router.navigate(['']);
    }
  }

}
