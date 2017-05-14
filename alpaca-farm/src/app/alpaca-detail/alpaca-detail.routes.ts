import { Route } from '@angular/router';

import { AlpacaDetailComponent } from './components/alpaca-detail/alpaca-detail.component';
import { AlpacaDetail1Component } from './components/alpaca-detail-1/alpaca-detail-1.component';
import { AlpacaDetail2Component } from './components/alpaca-detail-2/alpaca-detail-2.component';

export const alpacaDetailRoutes: Route[] = [{
  path: 'alpaca/:id',
  component: AlpacaDetailComponent ,
  children: [
    {
      path: 'detail-1',
      component: AlpacaDetail1Component
    },
    {
      path: 'detail-2',
      component: AlpacaDetail2Component
    }
  ]
}];
