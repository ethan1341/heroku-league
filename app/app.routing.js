"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var champions_component_1 = require('./champions.component');
var champion_detail_component_1 = require("./champion-detail.component");
var routes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'champions', component: champions_component_1.ChampionsComponent },
    { path: 'items', loadChildren: './app/items.module' },
    { path: 'champions/detail/:id', component: champion_detail_component_1.ChampionDetailComponant }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map