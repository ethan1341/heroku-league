import { Component,  OnInit } from '@angular/core';
import {  Router, ActivatedRoute} from '@angular/router';
import { ChampionService} from './champion.service';
import { Subscription }       from 'rxjs/Subscription';
import { SafeResourceUrl, DomSanitizationService  } from '@angular/platform-browser';

@Component({
    selector: 'champion-detail',
    templateUrl:'html/champion-detail.html',
    styleUrls:['css/champion-detail.css'],
})

export class ChampionDetailComponent implements OnInit{
    safeUrl :SafeResourceUrl;
    champion: any;
    private sub: Subscription;
    constructor(
        private championService: ChampionService,
        private route: ActivatedRoute,//
        private router: Router,//Not being used currently
        private sanitizer: DomSanitizationService
    ){};

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.championService.getChampion(id).subscribe(champion => {
                this.champion = champion;
                this.safeUrl = this.sanitizer.bypassSecurityTrustStyle("url("+this.champion.bgLower+")")
            })
        })
    }
}

