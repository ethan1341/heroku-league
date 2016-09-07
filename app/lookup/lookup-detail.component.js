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
var router_1 = require('@angular/router');
var LookupDetailComponent = (function () {
    function LookupDetailComponent(lookupService, route, router) {
        this.lookupService = lookupService;
        this.route = route;
        this.router = router;
        this.hostStats = {};
    }
    LookupDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var name = params['name']; // (+) converts string 'id' to a number
            _this.searchedSummoner = name.toLowerCase();
            _this.lookupService.searchUser(name).subscribe(function (matchHistory) {
                _this.matchHistory = matchHistory;
                for (var i = 0; i < _this.matchHistory.length; i++) {
                    for (var j = 0; j < _this.matchHistory[i].participantIdentities.length; j++) {
                        var summoner = _this.matchHistory[i].participantIdentities[j].player.summonerName.toLowerCase();
                        if (summoner == _this.searchedSummoner) {
                            _this.hostStats[i] = {};
                            _this.hostStats[i].stats = [];
                            _this.hostStats[i].displaySummoner = _this.matchHistory[i].participantIdentities[j].player.summonerName;
                            _this.hostStats[i].hostChampion = _this.matchHistory[i].participants[j].championId;
                            _this.hostStats[i].stats.push(_this.matchHistory[i].participants[j].stats);
                        }
                        else {
                            console.log(summoner, _this.searchedSummoner);
                        }
                    }
                }
            }, function (error) {
                console.log(error.status);
                var link = ['error/', error.status];
                _this.router.navigate(link);
            });
        });
    };
    LookupDetailComponent = __decorate([
        core_1.Component({
            selector: 'lookup-detail-component',
            templateUrl: 'html/lookup-detail.html',
            styleUrls: ['css/lookup-detail.css']
        }), 
        __metadata('design:paramtypes', [lookup_service_1.LookupService, router_1.ActivatedRoute, router_1.Router])
    ], LookupDetailComponent);
    return LookupDetailComponent;
}());
exports.LookupDetailComponent = LookupDetailComponent;
//# sourceMappingURL=lookup-detail.component.js.map