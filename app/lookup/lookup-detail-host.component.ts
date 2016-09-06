import {Component,OnInit,Input} from '@angular/core';
import { ChampionService } from '../champions/champion.service';
@Component({
    selector: 'lookup-detail-host-selector',
    templateUrl:'html/lookup-detail-host.html',
    styleUrls:['css/lookup-detail.css'],
})

export class LookupDetailHostComponent implements OnInit{
    @Input()
    public hostStats:any;
    public champion:any;
    constructor(
        private championService:ChampionService
    ){

    }
    ngOnInit(){
        console.log('ee',this.hostStats)
        this.championService.getChampion(this.hostStats.hostChampion).subscribe(champion => {
            this.champion = champion;
        })
    }
}