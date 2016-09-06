import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';
import { routing }        from './routing/app.routing';
import { AppComponent } from './app.component';
import { ChampionService} from './champions/champion.service';
import { BROWSER_SANITIZATION_PROVIDERS  } from '@angular/platform-browser';
import {AuthGuard} from './settings/settings.service';
import { LookupService } from './lookup/lookup.service'
import { ItemsService } from './items/items.service'
import { LookupDetailPlayerComponent} from './lookup/lookup-detail-player.component';
import { LookupDetailHostComponent} from './lookup/lookup-detail-host.component'




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing,
    ],

    providers:[  LookupService,ChampionService,BROWSER_SANITIZATION_PROVIDERS,AuthGuard,ItemsService ],

    declarations: [
        AppComponent,LookupDetailPlayerComponent,LookupDetailHostComponent//loaded in my router needs to be included
    ],
    bootstrap: [ AppComponent]
})
export class AppModule { }
