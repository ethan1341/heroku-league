import { Routes, RouterModule} from '@angular/router';
import {ChampionsComponent} from '../champions/champions.component';
import {ChampionDetailComponent} from "../champions/champion-detail.component";
import { SettingsComponent } from '../settings/settings.component';
import { AuthGuard }             from '../settings/settings.service';
import { LookupComponent} from '../lookup/lookup.component';
import { LookupDetailComponent} from '../lookup/lookup-detail.component';
import { ErrorsComponent } from '../errors/errors.component';

const routes: Routes = [
  {path: '', redirectTo: '/lookup', pathMatch: 'full'},
  {path:'champion', component:ChampionsComponent},
  {path:'items', loadChildren:'/app/items/items.module'}, //Routing needs to be direct not relative?
  {path:'champions/detail/:id', component:ChampionDetailComponent},
  {path:'settings',canActivate: [AuthGuard], component:SettingsComponent},
  {path:'lookup', component:LookupComponent},
  {path:'lookup/matchhistory/:name', component:LookupDetailComponent},
  {path:'error/:response', component:ErrorsComponent}
];

export const routing = RouterModule.forRoot(routes);



