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
var lookup_service_1 = require('./lookup.service');
var champion_service_1 = require('../champions/champion.service');
var LookupDetailPlayerComponent = (function () {
    function LookupDetailPlayerComponent(lookupService, //Not being used
        championService) {
        this.lookupService = lookupService;
        this.championService = championService;
    }
    LookupDetailPlayerComponent.prototype.getChampions = function () {
        var _this = this;
        this.championService.getChampions()
            .subscribe(function (champions) {
            console.log(champions);
            var championMap = {};
            for (var i = 0; i < champions.allChampions.length; i++) {
                if (champions.allChampions[i].id == _this.championId) {
                    _this.championImage = champions.allChampions[i].image; //Red syntax even though its exists
                }
            }
            _this.champions = championMap;
            console.log(_this.champions);
        }, function (error) { return _this.errorMessage = error; });
    };
    LookupDetailPlayerComponent.prototype.ngOnInit = function () {
        this.getChampions();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LookupDetailPlayerComponent.prototype, "championId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LookupDetailPlayerComponent.prototype, "playerName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LookupDetailPlayerComponent.prototype, "championImage", void 0);
    LookupDetailPlayerComponent = __decorate([
        core_1.Component({
            selector: 'lookup-detail-player-selector',
            templateUrl: 'html/lookup-detail-player.html',
            styleUrls: ['css/lookup-detail.css']
        }), 
        __metadata('design:paramtypes', [lookup_service_1.LookupService, champion_service_1.ChampionService])
    ], LookupDetailPlayerComponent);
    return LookupDetailPlayerComponent;
}());
exports.LookupDetailPlayerComponent = LookupDetailPlayerComponent;
//# sourceMappingURL=lookup-detail-player.component.js.map