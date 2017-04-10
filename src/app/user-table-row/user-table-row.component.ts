import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../../models/User";

@Component({
    selector: '[user-table-row]',
    templateUrl: './user-table-row.component.html',
    styleUrls: ['./user-table-row.component.css']
})
export class UserTableRowComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

    @Input() hideOffline: boolean;
    @Input() user: User;

    @Output() clickUser = new EventEmitter<User>();

    onClickUser() {
        console.log("UserTable, user clicked =>", this.user);
        this.clickUser.emit(this.user);
    }
}
