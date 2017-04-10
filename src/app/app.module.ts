import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserTableComponent } from './user-table/user-table.component';
import { UserTableRowComponent } from './user-table-row/user-table-row.component';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {routing} from "./router.config";
import {AuthenticationService} from "./authentication.service";

@NgModule({
    declarations: [
        AppComponent,
        UserTableComponent,
        UserTableRowComponent,
        HomeComponent,
        LoginComponent,
        SignUpComponent
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [UserService, AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
