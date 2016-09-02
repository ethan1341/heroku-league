import { Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {ChampionsComponent} from './champions.component';
import {ChampionDetailComponant} from "./champion-detail.component";
import {ItemsComponent} from './items.component';
import { SettingsComponent } from './settings.component';
import { AuthGuard }             from './settings.service';
import { LookupComponent} from './lookup.component';
import { LookupDetailComponent} from './lookup-detail.component';
const routes: Routes = [
  {path: '',
    redirectTo: '/login',
    pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'champions', component:ChampionsComponent},
  {path:'items', loadChildren:'./app/items.module'},
  {path:'champions/detail/:id', component:ChampionDetailComponant},
  {path:'settings',canActivate: [AuthGuard], component:SettingsComponent},
  {path:'lookup', component:LookupComponent},
  {path:'lookup/matchhistory/:name', component:LookupDetailComponent},




];

export const routing = RouterModule.forRoot(routes);



