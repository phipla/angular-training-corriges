import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EffectsRunner, EffectsTestingModule } from '@ngrx/effects/testing';
import { AlpacaListEffects } from './alpaca-list.effects';
import { AlpacaListStore } from './alpaca-list.store';
import { AlpacaRepositoryService } from './alpaca-repository.service';
import { Alpaca } from './alpaca';
import { MockAlpacaRepositoryService } from './alpaca-repository.service.mock';
import { Action  } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { createAction } from './action';

describe('AlpacaListEffects', () => {
  let runner: EffectsRunner;
  let alpacaListEffects: AlpacaListEffects;
  let mockAlpacaRepositoryService: MockAlpacaRepositoryService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      AlpacaListEffects,
      {
        provide: AlpacaRepositoryService,
        useClass: MockAlpacaRepositoryService
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    alpacaListEffects = TestBed.get(AlpacaListEffects);
    mockAlpacaRepositoryService = TestBed.get(AlpacaRepositoryService);
    mockAlpacaRepositoryService.data = [ new Alpaca({ id: 1, name: 'test1' }) ];
  });

  describe('retrieve$', () => {
    it('calls readAll on alpacaService, then emit RETRIEVE_SUCCESS with the result', fakeAsync(() => {
      spyOn(mockAlpacaRepositoryService, 'readAll').and.callThrough();
      // When a RETRIEVE action is queued
      runner.queue(createAction(AlpacaListStore.RETRIEVE));
      // And retrieved$ is subscribed to
      let result: Action|null = null;
      alpacaListEffects.retrieve$.subscribe(res => result = res);
      tick();
      // Then the store is queried
      expect(mockAlpacaRepositoryService.readAll).toHaveBeenCalledTimes(1);
      // And an action of type RETRIEVE_SUCCESS is returned
      expect(result).toEqual(createAction(
        AlpacaListStore.RETRIEVE_SUCCESS,
        { alpacas: mockAlpacaRepositoryService.data }
      ));
    }));

    it('calls readAll on alpacaService, then emit ERROR in case of error', fakeAsync(() => {
      spyOn(mockAlpacaRepositoryService, 'readAll').and.returnValue(Observable.throw('test: error'));
      // When a RETRIEVE action is queued
      runner.queue(createAction(AlpacaListStore.RETRIEVE));
      // And retrieved$ is subscribed to
      let result: Action|null = null;
      alpacaListEffects.retrieve$.subscribe(res => result = res);
      tick();
      // Then the store is queried
      expect(mockAlpacaRepositoryService.readAll).toHaveBeenCalledTimes(1);
      // And an action of type ERROR is returned
      expect(result).toEqual(createAction(
        AlpacaListStore.ERROR,
        { error: 'test: error' }
      ));
    }));
  });
});
