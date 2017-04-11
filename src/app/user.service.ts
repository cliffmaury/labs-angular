import { Injectable } from '@angular/core';
import {Status, User} from "./models/user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    private users: User[];

    constructor(private http: Http) {

    }

    /**
     *
     * @returns {any}
     */
    get(): Promise<User[]> {
        // use fallback to promise
        return this.http
            .get('api/users')
            .toPromise()
            .then(response => response.json());
    }

    /**
     *
     * @param user
     */
    create(user: User): Promise<User> {
        return this.http
            .post('/api/users', {user})
            .toPromise()
            .then(response => response.json());
    }

    /**
     *
     * @param email
     * @returns {any}
     */
    find(email: string): Promise<User> {
        console.log("find user by email", email);
        return this.http
            .get(`/api/users/${email}`)
            .toPromise()
            .then(response => response.json());
    }

}