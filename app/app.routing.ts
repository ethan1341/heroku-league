import { Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {ChampionsComponent} from './champions.component';
import {ChampionDetailComponant} from "./champion-detail.component";
import {ItemsComponent} from './items.component';

const routes: Routes = [
  {path: '',
    redirectTo: '/login',
    pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'champions', component:ChampionsComponent},
  {path:'items', loadChildren:'./app/items.module'},
  {path:'champions/detail/:id', component:ChampionDetailComponant}

];

export const routing = RouterModule.forRoot(routes);



