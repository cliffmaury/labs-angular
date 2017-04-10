import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./models/user";

@Injectable()
export class AuthenticationService {

  constructor(private userService: UserService) { }

  authenticate(email: string, password: string):boolean {
    console.log("authenticate user by email", email, "password", password);
    let user:User = this.userService.find(email);
    let authenticated:boolean =  null != user && user.password == password;
    if(authenticated) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    return authenticated;
  }

}
