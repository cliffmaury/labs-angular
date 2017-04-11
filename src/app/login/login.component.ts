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

    private credential: UserCredential = new UserCredential();
    private error: string;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private http:Http
    ) {

    }

    ngOnInit() {

    }

    /**
     *
     * @param user
     */
    login(user: User) {

        this.error = "";

        this.authenticationService
            .authenticate(this.credential.email, this.credential.password)
            .then(user => {
                this.router.navigate(['']);
            })
            .catch(err => {

                console.log(err);

                this.error = err._body;

            });
    }

}
