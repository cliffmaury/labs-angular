import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../models/user";
import {UsersSocketService} from "../users-socket.service";

@Component({
    selector: "user-table",
    templateUrl: "./user-table.component.html",
    styleUrls: ["./user-table.component.css"],
})
export class UserTableComponent implements OnInit {

    private connection;
    private users;
    private hideOffline: boolean = false;

    @Output() clickUser = new EventEmitter<User>();

    constructor(
        private userService: UserService,
        private usersSocketService: UsersSocketService
    ) { }

    /**
     *
     */
    ngOnInit() {
        this.userService.get().then(data => this.users = data);

        this.connection = this
            .usersSocketService
            .getUsers()
            .subscribe(users => {
                console.log("New users list =>", users);
                this.users = users;
            });
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

    /**
     *
     */
    ngOnDestroy() {
        this.connection.unsubscribe();
    }

}
