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
    /**
     *
     */
    @Input()
    private title: string;
    /**
     *
     */
    private subscriptionSignin;
    /**
     *
     */
    private subscriptionLogout;

    constructor(
        private router: Router,
        public authService: AuthenticationService
    ) {
        this.currentUser = this.authService.getUser();
        console.log("check logged authenticated user", this.currentUser);

        this.subscriptionSignin = this.authService.onSignin.subscribe(this.onSignin);
        this.subscriptionLogout = this.authService.onLogout.subscribe(this.onLogout);
    }

    ngOnInit() {

    }

    /**
     *
     * @param user
     */
    private onSignin = (user: User) => {
        this.currentUser = user;
    };

    /**
     *
     * @param b
     */
    private onLogout = (b: boolean) => {
        this.currentUser = undefined;
        this.router.navigate(['/']);
        console.log("Logout");
    };

    /**
     *
     */
    private changeRoute() {

        if(!this.currentUser) {
            this.router.navigate(['login']);
        } else {
            this.authService.logout();
        }
    }

    ngOnDestroy() {
        this.subscriptionLogout.unsubscribe();
        this.subscriptionSignin.unsubscribe();
    }

}
