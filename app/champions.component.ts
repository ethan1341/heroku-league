import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from './champion.ts';
import { ChampionService} from './champion.service';
import { FormsModule } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
    selector: 'champion-selector',
    templateUrl:'html/champions.html',
    styleUrls:['css/champions.css'],
    providers:[ChampionService]
})

export class ChampionsComponent implements OnInit{
    championObject = {};
    filterSelect = {
        assassins:false,
        fighers:false,
        mages:false,
        tanks:false,
        supports:false,
        marksmen:false
    };

    errorMessage:any;
    constructor (
      private router: Router,
      private championService: ChampionService
    ){};

    onChange(selected:any){
      console.log(selected)
    };
    ngOnInit(){
      this.getChampions();
    };
    checkFilters(selected: boolean){
      console.log(selected);
    }
    getChampions(){
        this.championService.getChampions()
                            .subscribe(champions => this.championObject = champions,
                                        error =>  this.errorMessage = <any>error);
  }
  gotoDetail(champion: Champion) {
      console.log('this ran')
      let link = ['champions/detail', champion.id];
      this.router.navigate(link);
  }

};
