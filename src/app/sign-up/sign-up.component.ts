import { Component, OnInit } from '@angular/core';
import {Status, User} from "../models/user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    private model: any = {};
    private error: any = {};

    constructor(private router: Router, private userService:UserService) { }

    ngOnInit() { }

    signup() {
        let foundUser:User = this.userService.find(this.model.email);
        if(foundUser != null) {
            this.error = {"msg":"user already exist"};
        } else {
            this.error = null;
            this.userService.create({... this.model, "status" : Status.offline });
            this.router.navigate(['']);
        }
    }

}
