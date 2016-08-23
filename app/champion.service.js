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
        //Observable place holderv/ has methods like subscribe
        //getChampions returns the placeholder
        return this.http.get(this.championsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ChampionService.prototype.getChampion = function (ID) {
        var specificUrl = './champions/detail/' + ID;
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
        championObject['Assassins'] = [];
        championObject['Fighters'] = [];
        championObject['Mages'] = [];
        championObject['Supports'] = [];
        championObject['Tanks'] = [];
        championObject['Marksmen'] = [];
        var body = res.json();
        var key;
        for (var i = 0; i < body.length; i++) {
            console.log(body[i].championObject.keyLower);
            championObject['allChampions'].push(body[i].championObject);
            //for(var j  = 0;j < body[i].championObject.tags.length;j++){
            switch (body[i].championObject.tags[0]) {
                case "Assassin":
                    championObject['Assassins'].push(body[i].championObject);
                    break;
                case "Fighter":
                    championObject['Fighters'].push(body[i].championObject);
                    break;
                case "Mage":
                    championObject['Mages'].push(body[i].championObject);
                    break;
                case "Support":
                    championObject['Supports'].push(body[i].championObject);
                    break;
                case "Tank":
                    championObject['Tanks'].push(body[i].championObject);
                    break;
                case "Marksman":
                    championObject['Marksmen'].push(body[i].championObject);
                    break;
            }
        }
        return championObject;
    };
    ChampionService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
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