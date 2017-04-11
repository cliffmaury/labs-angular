import { Injectable } from '@angular/core';
import {Status, User} from "./models/user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor(private http:Http) {
      // use observable
      this.http.get('/api/users').subscribe(
        response => {
          this.users = response.json();
        }
      );
    }


    private users: User[];
    /*= [
        {"id": 1, "email": 'john.doe@gmail.com', "password" : '12345', "firstName" : 'John', "lastName" : 'Doe', "status": Status.online},
        {"id": 2, "email": 'jane.doe@gmail.com', "password" : '12345', "firstName" : 'Jane', "lastName" : 'Doe', "status": Status.offline},
        {"id": 3, "email": 'jean.dupond@gmail.com', "password" : '12345', "firstName" : 'Jean', "lastName" : 'Dupond', "status": Status.busy},
        {"id": 4, "email": 'jean.dupont@gmail.com', "password" : '12345', "firstName" : 'Jean', "lastName" : 'Dupont', "status": Status.online},
        {"id": 5, "email": 'jeanne.dark@gmail.com', "password" : '12345', "firstName" : 'Jeanne', "lastName" : 'Dark', "status": Status.offline},
        {"id": 5, "email": 'joe.doe@gmail.com', "password" : '12345', "firstName" : 'Joe', "lastName" : 'Doe', "status":  Status.offline}
    ];
    */

    get(): Promise<User[]> {
        // use fallback to promise
        return this.http.get('/api/users').toPromise().then(
          response => response.json()
        );
    }

    create(user: User) {
      this.http.post('/api/users', {"user":user}).subscribe(
        response => {
          this.users = response.json();
        }
      );
    }

    find(email:string): User {
        console.log("find user by email", email);
        return this.users.find(user => user.email == email);
    }

}
