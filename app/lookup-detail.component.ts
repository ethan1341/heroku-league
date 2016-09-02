import {Component,OnInit} from '@angular/core';
import {LookupService} from './lookup.service';
import {  Router, ActivatedRoute} from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { ChampionService} from './champion.service';

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
    constructor(
        private lookupService: LookupService,
        private route: ActivatedRoute,
        private router: Router,
        private championService: ChampionService,

    ){}
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let name = params['name']; // (+) converts string 'id' to a number
            this.lookupService.searchUser(name).subscribe(matchHistory => {
                this.matchHistory = matchHistory;
                console.log(matchHistory)
            })
        })
    }

}