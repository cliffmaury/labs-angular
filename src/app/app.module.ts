import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserTableComponent } from './user-table/user-table.component';
import { UserTableRawComponent } from './user-table-raw/user-table-raw.component';

@NgModule({
    declarations: [
        AppComponent,
        UserTableComponent,
        UserTableRawComponent
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
