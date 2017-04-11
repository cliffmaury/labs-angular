import {Component, EventEmitter, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {UserCredential, User} from "../models/user";
import {Http} from "@angular/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _onConnected: EventEmitter<User> = new EventEmitter();

  credential: UserCredential = new UserCredential();
  authenticated: boolean = true;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private http:Http) {

  }

  ngOnInit() {

  }

  login(user: User) {
    this.authenticationService.authenticate(this.credential.email, this.credential.password)
      .subscribe(user => {
        this.authenticated = user != null;
        console.log("user is authenticated", this.authenticated);
        if (this.authenticated) {
          this.router.navigate(['']);
        }
      });
  }

}
