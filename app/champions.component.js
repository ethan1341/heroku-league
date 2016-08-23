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
        this.championObject = {};
        this.filterSelect = {
            assassins: false,
            fighers: false,
            mages: false,
            tanks: false,
            supports: false,
            marksmen: false
        };
    }
    ;
    ChampionsComponent.prototype.onChange = function (selected) {
        console.log(selected);
    };
    ;
    ChampionsComponent.prototype.ngOnInit = function () {
        this.getChampions();
    };
    ;
    ChampionsComponent.prototype.checkFilters = function (selected) {
        console.log(selected);
    };
    ChampionsComponent.prototype.getChampions = function () {
        var _this = this;
        this.championService.getChampions()
            .subscribe(function (champions) { return _this.championObject = champions; }, function (error) { return _this.errorMessage = error; });
    };
    ChampionsComponent.prototype.gotoDetail = function (champion) {
        console.log('this ran');
        var link = ['champions/detail', champion.id];
        this.router.navigate(link);
    };
    ChampionsComponent = __decorate([
        core_1.Component({
            selector: 'champion-selector',
            templateUrl: 'html/champions.html',
            styleUrls: ['css/champions.css'],
            providers: [champion_service_1.ChampionService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, champion_service_1.ChampionService])
    ], ChampionsComponent);
    return ChampionsComponent;
}());
exports.ChampionsComponent = ChampionsComponent;
;
//# sourceMappingURL=champions.component.js.map