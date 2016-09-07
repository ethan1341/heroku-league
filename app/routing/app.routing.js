"use strict";
var router_1 = require('@angular/router');
var champions_component_1 = require('../champions/champions.component');
var champion_detail_component_1 = require("../champions/champion-detail.component");
var settings_component_1 = require('../settings/settings.component');
var settings_service_1 = require('../settings/settings.service');
var lookup_component_1 = require('../lookup/lookup.component');
var lookup_detail_component_1 = require('../lookup/lookup-detail.component');
var errors_component_1 = require('../errors/errors.component');
var routes = [
    { path: '', redirectTo: '/lookup', pathMatch: 'full' },
    { path: 'champion', component: champions_component_1.ChampionsComponent },
    { path: 'items', loadChildren: '/app/items/items.module' },
    { path: 'champions/detail/:id', component: champion_detail_component_1.ChampionDetailComponent },
    { path: 'settings', canActivate: [settings_service_1.AuthGuard], component: settings_component_1.SettingsComponent },
    { path: 'lookup', component: lookup_component_1.LookupComponent },
    { path: 'lookup/matchhistory/:name', component: lookup_detail_component_1.LookupDetailComponent },
    { path: 'error/:response', component: errors_component_1.ErrorsComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map