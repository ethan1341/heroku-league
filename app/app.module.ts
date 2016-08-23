import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';
import { routing }        from './app.routing';
import { AppComponent } from './app.component';
import { CommonModule }  from '@angular/common';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],

    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent]
})
export class AppModule { }
