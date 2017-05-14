import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app.state';

import { Alpaca } from './alpaca';

import { createAction } from './action';

@Injectable()
export class AlpacaListStore {
  public static RETRIEVE = 'ALPACA_RETRIEVE';
  public static CREATE = 'ALPACA_CREATE';
  public static UPDATE = 'ALPACA_UPDATE';
  public static DELETE = 'ALPACA_DELETE';

  public static RETRIEVE_SUCCESS = 'ALPACA_RETRIEVE_SUCCESS';
  public static CREATE_SUCCESS = 'ALPACA_CREATE_SUCCESS';
  public static UPDATE_SUCCESS = 'ALPACA_UPDATE_SUCCESS';
  public static DELETE_SUCCESS = 'ALPACA_DELETE_SUCCESS';

  public static ERROR = 'ALPACA_ERROR';

  constructor(
    private store: Store<AppState>
  ) {}

  public getAlpacas(): Observable<Alpaca[]> {
    return this.store.select(appState => appState.alpacaList.alpacas);
  }

  public getAlpaca(id: number): Observable<Alpaca> {
    return this.getAlpacas().map(alpacaList => alpacaList.find(alpaca => alpaca.id === id));
  }

  public retrieve() {
    this.store.dispatch({ type: AlpacaListStore.RETRIEVE });
  }

  public create(alpaca: Alpaca) {
    this.store.dispatch(createAction(AlpacaListStore.CREATE, { alpaca }));
  }

  public update(id: number, alpaca: Alpaca) {
    this.store.dispatch(createAction(AlpacaListStore.UPDATE, { id, alpaca }));
  }

  public delete(id: number) {
    this.store.dispatch(createAction(AlpacaListStore.DELETE, { id }));
  }
}
