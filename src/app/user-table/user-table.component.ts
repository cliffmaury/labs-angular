import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../models/user";
import { UsersSocketService } from "../users-socket.service";
import { Observable } from "rxjs";

@Component({
    selector: "user-table",
    templateUrl: "./user-table.component.html",
    styleUrls: ["./user-table.component.css"],
})
export class UserTableComponent implements OnInit {

    private users: Observable<User[]>;
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

        const source1 = this
            .userService
            .getUsersObservable();

        const source2 = this.usersSocketService.getUsers();

        this.users = Observable.merge(
            source1,
            source2
        );

        //
        // this.usersSubscription = observable.subscribe(users => this.users);
        //
        //
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
        // if you use subscription in component => this.usersSubscription.unsubscribe();
    }

}
