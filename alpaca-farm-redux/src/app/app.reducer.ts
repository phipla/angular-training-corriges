import { alpacaListReducer } from './model';
import { routerReducer } from '@ngrx/router-store';

export const appReducer = {
  router: routerReducer,
  alpacaList: alpacaListReducer
};
