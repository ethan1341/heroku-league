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
var platform_browser_1 = require('@angular/platform-browser');
var ChampionDetailComponant = (function () {
    function ChampionDetailComponant(championService, route, router, sanitizer) {
        this.championService = championService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
    }
    ;
    ChampionDetailComponant.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.championService.getChampion(id).subscribe(function (champion) {
                _this.champion = champion;
                _this.safeUrl = _this.sanitizer.bypassSecurityTrustStyle("url(" + _this.champion.bgLower + ")");
            });
        });
    };
    ChampionDetailComponant = __decorate([
        core_1.Component({
            selector: 'champion-detail',
            templateUrl: 'html/champion-detail.html',
            styleUrls: ['css/champion-detail.css'],
        }), 
        __metadata('design:paramtypes', [champion_service_1.ChampionService, router_1.ActivatedRoute, router_1.Router, platform_browser_1.DomSanitizationService])
    ], ChampionDetailComponant);
    return ChampionDetailComponant;
}());
exports.ChampionDetailComponant = ChampionDetailComponant;
//Observer = Has to be subscribed to an Event/Emitter
//Emitter = Event = Observable
//Subscribe = A way for emitters to know an observer exists
//Observable future data
//Emitter is the data callback
// OBSERVABLE IS THE GET REQUEST
// Observer is the function thats ran once the Obersable is emitting
//Subcribe is ran and when the Obersable is complete the funciton i nsdie of subscribe is ran
//get request returns observable
//when the data comes back
//subscribe 
//# sourceMappingURL=champion-detail.component.js.map