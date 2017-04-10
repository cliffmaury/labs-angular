import {Injectable, EventEmitter} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./models/user";

@Injectable()
export class AuthenticationService {

    private _onSignin: EventEmitter<User> = new EventEmitter();
    private _onLogout: EventEmitter<boolean> = new EventEmitter();

    constructor(private userService: UserService) { }

    public authenticate(email: string, password: string):boolean {
        console.log("authenticate user by email", email, "password", password);

        let user: User = this.userService.find(email);
        let authenticated: boolean =  null != user && user.password == password;

        if (authenticated) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this._onSignin.emit(user);
        }
        return authenticated;
    }

    public logout() {
        localStorage.removeItem('currentUser');
        this._onLogout.emit(false);
    }

    /**
     *
     * @returns {any}
     */
    public getUser() {
        console.log('getUser =>', localStorage.getItem('currentUser'));
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    get onSignin(): EventEmitter<User> {
        return this._onSignin;
    }

    get onLogout(): EventEmitter<boolean> {
        return this._onLogout;
    }
}
