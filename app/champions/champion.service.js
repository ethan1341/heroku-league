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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ChampionService = (function () {
    function ChampionService(http) {
        this.http = http;
        this.championsUrl = '/champions';
    }
    ;
    ChampionService.prototype.getChampions = function () {
        //Observable place holder/ has methods like subscribe
        //getChampions returns the placeholder
        return this.http.get(this.championsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ChampionService.prototype.getChampion = function (ID) {
        var specificUrl = '/champions/detail/' + ID;
        return this.http.get(specificUrl)
            .map(this.extractChampion)
            .catch(this.handleError);
    };
    ChampionService.prototype.extractChampion = function (res) {
        var body = res.json();
        var lowercaseFull = body[0].championObject.key.toLowerCase();
        body[0].championObject.keyLower = lowercaseFull;
        var backgroundURL = 'http://lolstatic-a.akamaihd.net/game-info/1.1.9/images/champion/backdrop/bg-' + body[0].championObject.keyLower + '.jpg';
        body[0].championObject.bgLower = backgroundURL;
        return body[0].championObject;
    };
    ChampionService.prototype.extractData = function (res) {
        var championObject = {};
        championObject['allChampions'] = [];
        championObject['Assassins'] = {};
        championObject['Assassins']['AssassinsData'] = [];
        championObject['Fighters'] = {};
        championObject['Fighters']['FightersData'] = [];
        championObject['Mages'] = {};
        championObject['Mages']['MagesData'] = [];
        championObject['Supports'] = {};
        championObject['Supports']['SupportsData'] = [];
        championObject['Tanks'] = {};
        championObject['Tanks']['TanksData'] = [];
        championObject['Marksmen'] = {};
        championObject['Marksmen']['MarksmenData'] = [];
        var body = res.json();
        var key;
        for (var i = 0; i < body.length; i++) {
            championObject['allChampions'].push(body[i].championObject);
            body[i].championObject.tags = body[i].championObject.tags[0];
            body[i].championObject.image = body[i].championObject.image.full;
            switch (body[i].championObject.tags) {
                case "Assassin":
                    championObject['Assassins']['AssassinsData'].push(body[i].championObject);
                    break;
                case "Fighter":
                    championObject['Fighters']['FightersData'].push(body[i].championObject);
                    break;
                case "Mage":
                    championObject['Mages']['MagesData'].push(body[i].championObject);
                    break;
                case "Support":
                    championObject['Supports']['SupportsData'].push(body[i].championObject);
                    break;
                case "Tank":
                    championObject['Tanks']['TanksData'].push(body[i].championObject);
                    break;
                case "Marksman":
                    championObject['Marksmen']['MarksmenData'].push(body[i].championObject);
                    break;
            }
        }
        return championObject;
    };
    ChampionService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    ChampionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ChampionService);
    return ChampionService;
}());
exports.ChampionService = ChampionService;
//# sourceMappingURL=champion.service.js.map