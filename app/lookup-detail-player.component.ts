import {Component,OnInit,Input} from '@angular/core';
import {LookupService} from './lookup.service';
import {  Router, ActivatedRoute} from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { ChampionService} from './champion.service';

@Component({
    selector: 'lookup-detail-player-component',
    templateUrl:'html/lookup-detail-player.html',
    styleUrls:['css/lookup-detail.css']
})


export class LookupDetailPlayerComponent{
    @Input()
    public championId:any;
    @Input()
    public playerName:any;
    public championImage:any;
    private champions:any;
    private errorMessage:any;
    constructor(
        private lookupService: LookupService,
        private championService: ChampionService
    ){}
    getChampions(){
        this.championService.getChampions()
            .subscribe(champions => {
                    console.log(champions)
                    var championMap = {};
                    for(var i = 0; i < champions.allChampions.length;i++){
                       if(champions.allChampions[i].id == this.championId){
                          this.championImage = champions.allChampions[i].image
                       }
                    }
                    this.champions= championMap
                    console.log(this.champions)
                },
                error =>  this.errorMessage = <any>error);
    }
    ngOnInit(){
        this.getChampions()
    }
}