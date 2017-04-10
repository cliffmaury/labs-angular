import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  model: any = {};
  authenticated:boolean = true;
  login() {
    this.authenticated = this.authenticationService.authenticate(this.model.email, this.model.password);
    console.log("user is authenticated", this.authenticated);
    if (this.authenticated) {
      this.router.navigate(['']);
    }
  }

}
