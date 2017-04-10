import {Component, OnInit, Input} from '@angular/core';
import {User} from "../models/user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    private currentUser: User;

    @Input()
    private title: string;

    constructor(
        private router: Router,
        public authService: AuthenticationService
    ) {
        this.currentUser = this.authService.getUser();
        console.log("check logged authenticated user", this.currentUser);
    }

    ngOnInit() {

    }

    private changeRoute() {

        if(this.currentUser == null) {
            this.router.navigate(['login']);
        } else {
            this.currentUser = null;
            this.authService.logout();
            this.router.navigate(['']);
        }
    }

}
