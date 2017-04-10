import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { UserService } from "../user.service";
import { User } from "../../models/User";

@Component({
    selector: 'user-table',
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {

    constructor(private _userService: UserService) { }

    public users;
    public hideOffline: boolean = false;

    @Output() clickUser = new EventEmitter<User>();

    ngOnInit() {
        this.users = this._userService.get();
    }

    showHideOfflineUser() {
        this.hideOffline = !this.hideOffline;
    }

    trackByUserId(index, user) {
        return user.id
    }

    /**
     *
     * @param user
     */
    onClickUser(user) {
        console.log("UserTable, user clicked =>", user);
        this.clickUser.emit(user);
    }

}
