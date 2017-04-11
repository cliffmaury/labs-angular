import {Injectable, EventEmitter} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./models/user";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService {

    private _onSignin: EventEmitter<User> = new EventEmitter();
    private _onLogout: EventEmitter<boolean> = new EventEmitter();

    constructor(private http: Http) {

    }

    /**
     *
     * @param email
     * @param password
     * @returns {wdpromise.Promise<T>|PromiseLike<ElementFinder[]|any[]>|IPromise<Array<ElementFinder>>|promise.Promise<any>|promise.Promise<ElementFinder[]|any[]>|wdpromise.Promise<any>|any}
     */
    public authenticate(email: string, password: string): Promise<User> {

        console.log("authenticate user by email", email, "password", password);

        return this
            .http
            .post('/api/users/authenticate', { email: email, password: password })
            .toPromise()
            .then(response => response.json())
            .then(user => {
                this._onSignin.emit(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            });
    }

    /**
     *
     */
    public logout() {

        const user = this.getUser();

        return this.http
            .patch(`/api/users/${user.email}/offline`, {})
            .toPromise()
            .then(response => response.json())
            .then(() => {
                localStorage.removeItem('currentUser');
                this._onLogout.emit(false);
            });

    }

    /**
     *
     * @returns {any}
     */
    public getUser() {

        console.log('getUser =>', localStorage.getItem('currentUser'));
        let user = localStorage.getItem('currentUser');
        console.log("getUser", user);

        try{
            if(user) {
                return JSON.parse(user);
            }
        }catch(er){

        }

        return null;
    }

    /**
     *
     * @returns {EventEmitter<User>}
     */
    get onSignin(): EventEmitter<User> {
        return this._onSignin;
    }

    /**
     *
     * @returns {EventEmitter<boolean>}
     */
    get onLogout(): EventEmitter<boolean> {
        return this._onLogout;
    }
}
