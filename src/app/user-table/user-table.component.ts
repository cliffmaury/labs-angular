import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";

@Component({
    selector: 'app-user-table',
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {

    constructor(private _userService: UserService) { }

    public users;
    public hideOffline: boolean = false;

    ngOnInit() {
        this.users = this._userService.get();
    }

    showHideOfflineUser() {
        this.hideOffline = !this.hideOffline;
    }

    trackByUserId(index, user) {
        return user.id
    }

}
