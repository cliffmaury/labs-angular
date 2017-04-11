import {Injectable, EventEmitter} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./models/user";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService {

    private _onSignin: EventEmitter<User> = new EventEmitter();
    private _onLogout: EventEmitter<boolean> = new EventEmitter();

    constructor(private http:Http) {

    }

    public authenticate(email: string, password: string):Observable<Response> {
        console.log("authenticate user by email", email, "password", password);

      return this.http.post('/api/users/authenticate', { email: email, password: password })
        .map(response => {
            if(response.status == 200) {
              let user = response.json();
              localStorage.setItem('currentUser', JSON.stringify(user));

            } else if(response.status == 401 || response.status == 404) {
              console.error("could not authenticate user");
            }
            return response.json();
        }).map( user => {
          this.http.patch(`/api/users/${email}/online`, {}).subscribe(response => {
            console.log("update status", response);
            let user = response.json();
            this._onSignin.emit(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
          });

          return user;
        });
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
        let user = localStorage.getItem('currentUser');
        console.log("getUser", user)
        if(user) {
          return JSON.parse(user);
        }
        return null;
    }

    get onSignin(): EventEmitter<User> {
        return this._onSignin;
    }

    get onLogout(): EventEmitter<boolean> {
        return this._onLogout;
    }
}
