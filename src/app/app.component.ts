import { Component } from '@angular/core';
import {User} from "./models/User";
import {MdDialog} from "@angular/material";
import {DialogUserComponent} from "./dialog-user/dialog-user.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: "Labs Angular";

    constructor(public dialog: MdDialog) {

    }

    private onClickUser(user: User) {

        const dialogRef = this.dialog.open(DialogUserComponent);

        dialogRef.componentInstance.user = user;

    }
}
