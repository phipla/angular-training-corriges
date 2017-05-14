import { AlpacaList } from './model/alpaca-list.interface';
import { RouterState } from '@ngrx/router-store';

export interface AppState {
  alpacaList: AlpacaList;
  router: RouterState;
}
