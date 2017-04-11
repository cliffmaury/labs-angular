import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {User} from "../models/user";

@Component({
    selector: 'dialog-user',
    templateUrl: './dialog-user.component.html',
    styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {

    public user: User;

    constructor(
        public dialogRef: MdDialogRef<DialogUserComponent>
    ) {
        console.log(dialogRef.componentInstance);
    }

    ngOnInit() {

    }

}
