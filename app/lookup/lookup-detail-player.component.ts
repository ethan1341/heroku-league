import {Component,OnInit,Input} from '@angular/core';
import {LookupService} from './lookup.service';
import {  Router, ActivatedRoute} from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { ChampionService} from '../champions/champion.service';

@Component({
    selector: 'lookup-detail-player-selector',
    templateUrl:'html/lookup-detail-player.html',
    styleUrls:['css/lookup-detail.css']
})


export class LookupDetailPlayerComponent{
    @Input()
    public championId:any;
    @Input()
    public playerName:any;
    @Input()
    public championImage:any;
    private champions:any;
    private errorMessage:any;
    constructor(
        private lookupService: LookupService, //Not being used
        private championService: ChampionService
    ){}

    getChampions(){
        this.championService.getChampions()
            .subscribe(champions => {
                    console.log(champions)
                    var championMap = {};
                    for(var i = 0; i < champions.allChampions.length;i++){
                       if(champions.allChampions[i].id == this.championId){  //Red syntax even though its exists
                          this.championImage = champions.allChampions[i].image //Red syntax even though its exists
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