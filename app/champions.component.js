"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var champion_service_1 = require('./champion.service');
var ChampionsComponent = (function () {
    function ChampionsComponent(router, championService) {
        this.router = router;
        this.championService = championService;
        this.displayList = [];
        this.championObject = {};
        this.filterSelect = {
            Assassins: false,
            Fighers: false,
            Mages: false,
            Tanks: false,
            Supports: false,
            Marksmen: false
        };
        this.championList = [];
    }
    ;
    ChampionsComponent.prototype.ngOnInit = function () {
        this.getChampions();
    };
    ;
    ChampionsComponent.prototype.generateArray = function (obj) {
        var objectArray = [];
        Object.keys(obj).map(function (key) { });
        Object.keys(obj).map(function (key) { objectArray.push(obj[key]); });
        return objectArray;
    };
    ChampionsComponent.prototype.createDisplay = function (typeSelected) {
        var search_term = typeSelected;
        var dataKey = search_term + "Data";
        console.log(typeSelected);
        if (this.filterSelect[typeSelected] == true) {
            this.displayList.unshift(this.championObject[typeSelected]);
        }
        else {
            for (var i = this.displayList.length - 1; i >= 0; i--) {
                console.log(dataKey);
                if (this.displayList[i][dataKey] !== undefined) {
                    this.displayList.splice(i, 1);
                    console.log('hello', this.displayList);
                }
                else {
                }
            }
        }
        console.log(this.displayList);
    };
    ChampionsComponent.prototype.getChampions = function () {
        var _this = this;
        this.championService.getChampions()
            .subscribe(function (champions) { _this.championObject = champions; console.log(_this.championObject); }, function (error) { return _this.errorMessage = error; });
    };
    ChampionsComponent.prototype.gotoDetail = function (champion) {
        console.log(champion);
        var link = ['champions/detail', champion.id];
        this.router.navigate(link);
    };
    ChampionsComponent = __decorate([
        core_1.Component({
            selector: 'champion-selector',
            templateUrl: 'html/champions.html',
            styleUrls: ['css/champions.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, champion_service_1.ChampionService])
    ], ChampionsComponent);
    return ChampionsComponent;
}());
exports.ChampionsComponent = ChampionsComponent;
;
//# sourceMappingURL=champions.component.js.map