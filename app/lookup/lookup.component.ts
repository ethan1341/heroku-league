import {Component} from '@angular/core';
import {LookupService} from './lookup.service'
import { Router } from '@angular/router';

@Component({
    selector: 'lookup-selector',
    templateUrl:'html/lookup.html',
    styleUrls:['css/lookup.css']
})

export class LookupComponent{
    errorMessage: string;
    response:string;
    matchHistroy: {};
    error:string;
    username: string;
    private summonerError: string = ""
    constructor(
        private router: Router,
        private lookupService: LookupService
    ){}
    submitName(summonerName:string){
       if(summonerName.length <= 2){
           this.summonerError = "This summoner name was not long enough"
       }else{
          this.username = summonerName;
           this.gotoMatchHistory(this.username)
       }
    }
    gotoMatchHistory(username:String){
        let link = ['lookup/matchhistory',username];
        this.router.navigate(link)
    }
}