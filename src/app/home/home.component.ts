import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {Router} from "@angular/router";
import {MdDialog} from "@angular/material";
import {DialogUserComponent} from "../dialog-user/dialog-user.component";
import {AuthenticationService} from "../authentication.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private currentUser: User;
    private subscriptionLogout;

    constructor(
        public dialog: MdDialog,
        public authService: AuthenticationService
    ) {
        this.currentUser = this.authService.getUser();
        this.subscriptionLogout = this.authService.onLogout.subscribe(this.onLogout);

    }

    ngOnInit() {

    }

    /**
     *
     * @param b
     */
    private onLogout = (b: boolean) => {
        this.currentUser = undefined;
    };

    private onClickUser(user: User) {

        console.log("AppComponent =>", user);

        const dialogRef = this.dialog.open(DialogUserComponent, {
            data: user
        });
    }

    ngOnDestroy() {
        this.subscriptionLogout.unsubscribe();
    }
}
