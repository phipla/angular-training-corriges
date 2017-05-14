import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action  } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import { AlpacaRepositoryService } from './alpaca-repository.service';
import { AlpacaListStore } from './alpaca-list.store';

import { createAction } from './action';

@Injectable()
export class AlpacaListEffects {
  @Effect()
  retrieve$ = this.actions$
    .ofType(AlpacaListStore.RETRIEVE)
    .mergeMap<Action, Action>(() => this.alpacaService.readAll()
      .map((alpacas: any) => createAction(AlpacaListStore.RETRIEVE_SUCCESS, { alpacas }))
      .catch((error: any) => Observable.of(createAction( AlpacaListStore.ERROR, { error })))
    );

  @Effect()
  create$ = this.actions$
    .ofType(AlpacaListStore.CREATE)
    .mergeMap<Action, Action>(action => this.alpacaService.create(action.payload.alpaca)
      .map(alpaca => createAction(AlpacaListStore.CREATE_SUCCESS, { alpaca }))
      .catch(error => Observable.of(createAction( AlpacaListStore.ERROR, { error })))
    );

  @Effect()
  update$ = this.actions$
    .ofType(AlpacaListStore.UPDATE)
    .mergeMap<Action, Action>(
      action => this.alpacaService.update(action.payload.id, action.payload.alpaca)
        .map(alpaca => createAction(AlpacaListStore.UPDATE_SUCCESS, { id: action.payload.id, alpaca }))
        .catch(error => Observable.of(createAction( AlpacaListStore.ERROR, { error })))
    );

  @Effect()
  delete$ = this.actions$
    .ofType(AlpacaListStore.DELETE)
    .mergeMap<Action, Action>(action => this.alpacaService.delete(action.payload.id)
      .map(alpaca => createAction(AlpacaListStore.DELETE_SUCCESS, { id: action.payload.id }))
      .catch(error => Observable.of(createAction( AlpacaListStore.ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private alpacaService: AlpacaRepositoryService
  ) {
  }
}
