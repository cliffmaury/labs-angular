import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../models/user";

@Component({
    selector: "user-table",
    templateUrl: "./user-table.component.html",
    styleUrls: ["./user-table.component.css"],
})
export class UserTableComponent implements OnInit {

    private users: User[];
    private hideOffline: boolean = false;

    @Output() clickUser = new EventEmitter<User>();


    constructor(private userService: UserService) { }

    /**
     *
     */
    ngOnInit() {
        this.users = this.userService.get();
    }

    /**
     *
     */
    showHideOfflineUser() {
        this.hideOffline = !this.hideOffline;
    }

    /**
     *
     * @param index
     * @param user
     */
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
