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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_1 = require('./routing/app.routing');
var app_component_1 = require('./app.component');
var champion_service_1 = require('./champions/champion.service');
var platform_browser_2 = require('@angular/platform-browser');
var settings_service_1 = require('./settings/settings.service');
var lookup_service_1 = require('./lookup/lookup.service');
var items_service_1 = require('./items/items.service');
var lookup_detail_player_component_1 = require('./lookup/lookup-detail-player.component');
var lookup_detail_host_component_1 = require('./lookup/lookup-detail-host.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.routing,
            ],
            providers: [lookup_service_1.LookupService, champion_service_1.ChampionService, platform_browser_2.BROWSER_SANITIZATION_PROVIDERS, settings_service_1.AuthGuard, items_service_1.ItemsService],
            declarations: [
                app_component_1.AppComponent, lookup_detail_player_component_1.LookupDetailPlayerComponent, lookup_detail_host_component_1.LookupDetailHostComponent //loaded in my router needs to be included
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map