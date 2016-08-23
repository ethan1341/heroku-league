import { Component } from '@angular/core';
import {Item} from './item';
import {ItemsService} from './items.service';
@Component({
    selector: 'items-component',
    templateUrl: 'html/items.html',
    styleUrls: ['css/items.css'],
    providers: [ItemsService]
})

export class ItemsComponent{
    items:Item[];
    errorMessage:string;
    constructor(
        private itemsService: ItemsService
    ){}
    getItems(){
        this.itemsService.getItems()
            .subscribe(
                items =>{this.items = items;console.log(this.items)},
                    error =>  this.errorMessage = <any>error);
    }
    ngOnInit(){
        this.getItems()
    }
};

