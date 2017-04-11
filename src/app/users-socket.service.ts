import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {User} from "./models/user";

@Injectable()
export class UsersSocketService {

    private socket;

    constructor() {

    }

    /**
     *
     * @returns Observable<User[]>
     */
    getUsers(): Observable<User[]> {
        let observable = new Observable(observer => {

            this.socket = io(window.location.origin);

            this.socket.on('users.update', (data) => {
                observer.next(data);
            });
            
            return () => {
                this.socket.disconnect();
            };
        });

        return observable;
    }

}
