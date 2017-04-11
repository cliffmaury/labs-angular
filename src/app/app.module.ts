import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserTableComponent } from './user-table/user-table.component';
import { UserTableRowComponent } from './user-table-row/user-table-row.component';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ROUTES } from "./app.routes";
import { AuthenticationService } from "./authentication.service";
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { RouterModule } from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        UserTableComponent,
        UserTableRowComponent,
        HomeComponent,
        LoginComponent,
        SignUpComponent,
        DialogUserComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        UserService,
        AuthenticationService
    ],
    bootstrap: [AppComponent],
    entryComponents: [DialogUserComponent]
})
export class AppModule { }
