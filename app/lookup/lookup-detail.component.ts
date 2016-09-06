import {Component,OnInit} from '@angular/core';
import {LookupService} from './lookup.service';
import {  Router, ActivatedRoute} from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

@Component({
    selector: 'lookup-detail-component',
    templateUrl:'html/lookup-detail.html',
    styleUrls:['css/lookup-detail.css']
})

export class LookupDetailComponent{
    private sub: Subscription;
    private champions:any;
    private matchHistory:any;
    private errorMessage:any;
    private searchedSummoner:any;
    public hostStats={};
    constructor(
        private lookupService: LookupService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let name = params['name']; // (+) converts string 'id' to a number
           this.searchedSummoner = name.toLowerCase()
            this.lookupService.searchUser(name).subscribe(
                matchHistory => {
                    this.matchHistory = matchHistory;
                    for(var i = 0;i<this.matchHistory.length;i++){
                        for(var j = 0;j<this.matchHistory[i].participantIdentities.length;j++){
                            var summoner = this.matchHistory[i].participantIdentities[j].player.summonerName.toLowerCase()
                            if(summoner == this.searchedSummoner){
                                this.hostStats[i] = {};
                                this.hostStats[i].stats = [];
                                this.hostStats[i].displaySummoner = this.matchHistory[i].participantIdentities[j].player.summonerName
                                this.hostStats[i].hostChampion =    this.matchHistory[i].participants[j].championId;
                                this.hostStats[i].stats.push(      this.matchHistory[i].participants[j].stats);
                            }else{
                                console.log(summoner,this.searchedSummoner)
                            }
                        }
                    }
                },
                error =>{
                    console.log(error.status)
                    var link = ['error/', error.status];
                    this.router.navigate(link);
                }


            )
        })
    }

}