import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ChronoComponent } from './chrono/chrono.component';
import {DecToStrPipe} from "app/dec-to-str.pipe";

@NgModule({
    declarations: [
        AppComponent,
        ChronoComponent,
        DecToStrPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
