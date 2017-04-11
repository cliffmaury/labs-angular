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

    private credential: UserCredential = new UserCredential();
    private error: string;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {

    }

    ngOnInit() {

    }

    login(user: User) {

        this.error = "";

        const authenticated = this
            .authenticationService
            .authenticate(this.credential.email, this.credential.password);

        if (authenticated) {
            this.router.navigate(['']);
        } else {
            this.error = "Mot de passe ou e-mail incorrect."
        }
    }

}
