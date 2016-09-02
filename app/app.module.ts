import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';
import { routing }        from './app.routing';
import { AppComponent } from './app.component';
import { ChampionService} from './champion.service';
import { SafeResourceUrl, DomSanitizationService,BROWSER_SANITIZATION_PROVIDERS  } from '@angular/platform-browser';
import {AuthGuard} from './settings.service';
import { LookupService } from './lookup.service'
import { LookupDetailPlayerComponent} from './lookup-detail-player.component'




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing,
    ],

    providers:[  LookupService,ChampionService,BROWSER_SANITIZATION_PROVIDERS,AuthGuard ],

    declarations: [
        AppComponent,LookupDetailPlayerComponent
    ],
    bootstrap: [ AppComponent]
})
export class AppModule { }
