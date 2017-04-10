import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {UserCredential, User} from "../models/user";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    credential: UserCredential = new UserCredential();
    authenticated: boolean = true;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {

    }

    ngOnInit() {

    }

    login(user: User) {


        this.authenticated = this
            .authenticationService
            .authenticate(this.credential.email, this.credential.password);

        console.log("user is authenticated", this.authenticated);

        if (this.authenticated) {
            this.router.navigate(['']);
        }
    }

}
