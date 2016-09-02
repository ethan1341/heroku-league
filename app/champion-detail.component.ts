import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {  Router, ActivatedRoute} from '@angular/router';
import { Champion } from './champion.ts';
import { ChampionService} from './champion.service';
import { Subscription }       from 'rxjs/Subscription';
import { SafeResourceUrl, DomSanitizationService,BROWSER_SANITIZATION_PROVIDERS,  } from '@angular/platform-browser';




@Component({
    selector: 'champion-detail',
    templateUrl:'html/champion-detail.html',
    styleUrls:['css/champion-detail.css'],
})

export class ChampionDetailComponant implements OnInit{
    safeUrl :SafeResourceUrl;
    champion: any;
    private sub: Subscription;
    constructor(
        private championService: ChampionService,
        private route: ActivatedRoute,
        private router: Router,
        private sanitizer: DomSanitizationService
    ){};

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.championService.getChampion(id).subscribe(champion => {this.champion = champion;
                this.safeUrl = this.sanitizer.bypassSecurityTrustStyle("url("+this.champion.bgLower+")")})
        })
    }

}

//Observer = Has to be subscribed to an Event/Emitter
//Emitter = Event = Observable
//Subscribe = A way for emitters to know an observer exists
//Observable future data


//Emitter is the data callback
// OBSERVABLE IS THE GET REQUEST
// Observer is the function thats ran once the Obersable is emitting
//Subcribe is ran and when the Obersable is complete the funciton i nsdie of subscribe is ran

//get request returns observable
//when the data comes back
//subscribe