import {ItemsComponent} from './items.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '',  component: ItemsComponent},
]

export const routing = RouterModule.forChild(routes);