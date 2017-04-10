import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {User} from "../models/user";

@Component({
    selector: 'dialog-user',
    templateUrl: './dialog-user.component.html',
    styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {

    private user: User;

    constructor(
        public dialogRef: MdDialogRef<DialogUserComponent>
    ) {
        this.user = dialogRef.config.data
    }

    ngOnInit() {

    }

}
