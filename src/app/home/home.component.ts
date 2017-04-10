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
    currentUser: User;

    constructor(
        public dialog: MdDialog,
        public authService: AuthenticationService
    ) {
        this.currentUser = this.authService.getUser();
    }

    ngOnInit() {

    }



    private onClickUser(user: User) {

        console.log("AppComponent =>", user);

        const dialogRef = this.dialog.open(DialogUserComponent, {
            data: user
        });
    }
}
