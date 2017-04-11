import { Component, OnInit } from '@angular/core';
import {Status, User} from "../models/user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    private user: User = new User();
    private error: string;

    constructor(
        private router: Router,
        private userService:UserService
    ) { }

    ngOnInit() { }

    /**
     *
     */
    signup() {

        this.userService
            .exists(this.user.email)
            .then(exists => {


                if (!exists) {
                    return this.userService
                        .create(this.user)
                        .then(user => this.router.navigate(['/login']));
                }

                this.error = "L'utilisateur existe déjà !";

                console.log(this.error);

            })

            .catch(err => {
                err = err._body;
            });

    }

}