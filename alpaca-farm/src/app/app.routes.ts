import { Routes } from '@angular/router';
import { AlpacaListComponent } from './components/alpaca-list/alpaca-list.component';

import { alpacaDetailRoutes } from './alpaca-detail';

export const appRoutes: Routes = [
  { path: '', component: AlpacaListComponent, pathMatch: 'full' },
  ...alpacaDetailRoutes
];
