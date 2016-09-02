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
})

export class ChampionsComponent implements OnInit{
    displayList:any[] = [];
    championObject = {};
    filterSelect = {
        Assassins:false,
        Fighers:false,
        Mages:false,
        Tanks:false,
        Supports:false,
        Marksmen:false
    };
    championList:Champion[] = [];

    errorMessage:any;
    constructor (
      private router: Router,
      private championService: ChampionService
    ){};

    ngOnInit(){
      this.getChampions();
    };
    generateArray(obj:any){
        var objectArray:any = [];
        Object.keys(obj).map((key)=>{ })
       Object.keys(obj).map((key)=>{objectArray.push(obj[key])});

        return objectArray
    }
    createDisplay(typeSelected:string){
        var search_term = typeSelected;
        var dataKey = search_term + "Data"
        console.log(typeSelected)
        if(this.filterSelect[typeSelected] == true){
            this.displayList.unshift(this.championObject[typeSelected])
        }else{
            for(var i = this.displayList.length - 1; i >= 0; i--) {
                console.log(dataKey)
                if (this.displayList[i][dataKey] !== undefined) {
                    this.displayList.splice(i, 1);
                    console.log('hello',this.displayList)
                        //<-- Uncomment  if only the first term has to be removed
                }else{

                }

            }
        }
        console.log(this.displayList)
    }
    getChampions(){
        this.championService.getChampions()
                            .subscribe(champions => {this.championObject = champions; console.log(this.championObject)},
                                        error =>  this.errorMessage = <any>error);
  }
  gotoDetail(champion: Champion) {
      console.log(champion)
      let link = ['champions/detail', champion.id];
      this.router.navigate(link);
  }

};
