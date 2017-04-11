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
import { DialogUserComponent } from './dialog-user/dialog-user.component';

@NgModule({
    declarations: [
        AppComponent,
        UserTableComponent,
        UserTableRowComponent,
        DialogUserComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        HttpModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent],
    entryComponents: [DialogUserComponent]
})
export class AppModule { }
