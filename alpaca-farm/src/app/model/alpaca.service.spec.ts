import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { AlpacaService } from './alpaca.service';
import { MockAlpacaRepositoryService } from './alpaca-repository.service.mock';
import { AlpacaRepositoryService } from './alpaca-repository.service';

import { Alpaca } from './alpaca';

describe('AlpacaService', () => {
  let testData: Array<Alpaca|undefined>;
  /*
   * Test bed configuration
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlpacaService,
        { provide: AlpacaRepositoryService, useClass: MockAlpacaRepositoryService }
      ]
    });
  });

  /*
   * Mock web service configuration
   */
  beforeEach(inject([
    AlpacaRepositoryService
  ], (
    mockAlpacaRepositoryService: MockAlpacaRepositoryService
  ) => {
    testData = [
      new Alpaca({id: 0, name: 'test0'}),
      new Alpaca({id: 1, name: 'test1'}),
      new Alpaca({id: 2, name: 'test2'}),
    ]
    mockAlpacaRepositoryService.data = testData;
  }));

  describe('retrieve', () => {
    it('should fetch the data', fakeAsync(inject([
      AlpacaService,
      AlpacaRepositoryService
    ], (
      service: AlpacaService,
      mockAlpacaRepositoryService: MockAlpacaRepositoryService
    ) => {
      spyOn(mockAlpacaRepositoryService, 'readAll').and.callThrough();

      // When an observable is obtained with AlpacaService.getAll()
      const observable = service.getAll();
      let alpacas: Alpaca[] = [];
      observable.subscribe(data => alpacas = data);

      // And retrieve is called
      service.retrieve();
      tick();

      // Then the "readAll" method is called on the service
      expect(mockAlpacaRepositoryService.readAll).toHaveBeenCalledTimes(1);

      // And observable emits the value
      expect(alpacas).toEqual(jasmine.objectContaining(testData));
    })));

    /*
     * Dans AlpacaService, changer le BehaviorSubject en Subject. Constater que ce test
     * ne passe plus dans ce cas.
     */
    it('should emit the same value if subscribed after the data was retrieved', fakeAsync(inject([
      AlpacaService
    ], (
      service: AlpacaService
    ) => {
      // When retrieve is called
      service.retrieve();
      tick();

      // And then, an observable is obtained with AlpacaService.getAll()
      const observable = service.getAll();
      let alpacas: Alpaca[] = [];
      observable.subscribe(data => alpacas = data);
      tick();

      // Then observable still emits the value
      expect(alpacas).toEqual(jasmine.objectContaining(testData));
    })));
  });

  describe('get', () => {
    let observable: Observable<Alpaca>
    let alpaca: Alpaca | null = null;

    beforeEach(inject([AlpacaService], (service: AlpacaService) => {
      observable = service.get(1);
      alpaca = null;
      observable.subscribe(data => alpaca = data);
    }));

    it('should return a single element', fakeAsync(inject([
      AlpacaService
    ], (
      service: AlpacaService
    ) => {
      // When retrieve is called
      service.retrieve();
      tick();
      // Then the observable emits the value corresponding to this id
      expect(alpaca).toEqual(jasmine.objectContaining(testData[1]));
    })));

    it('should emit the updated value on a subsequent retrieve', fakeAsync(inject([
      AlpacaService
    ], (
      service: AlpacaService
    ) => {
      // When retrieve is called
      service.retrieve();
      tick();
      // And the value is updated
      (<Alpaca>testData[1]).name = 'test1-updated';
      // And retrieve is called again
      service.retrieve();
      tick();
      // Then the observable emits the value corresponding to this id
      expect(alpaca).toEqual(jasmine.objectContaining(testData[1]));
    })));

    it('should emit undefined if the element is deleted', fakeAsync(inject([
      AlpacaService
    ], (
      service: AlpacaService
    ) => {
      // When retrieve is called
      service.retrieve();
      tick();
      // And the value is deleted
      testData[1] = undefined;
      // And retrieve is called after
      service.retrieve();
      tick();
      // Then the observable emits undefined
      expect(alpaca).toBeUndefined();
    })));
  });

  describe('addAlpaca', () => {
    it('should emit an updated list and call the webservice', fakeAsync(inject([
      AlpacaService,
      AlpacaRepositoryService
    ], (
      service: AlpacaService,
      mockAlpacaRepositoryService: MockAlpacaRepositoryService
    ) => {
      spyOn(mockAlpacaRepositoryService, 'create').and.callThrough();

      // Given an observable obtained with AlpacaService.getAll()
      const observable = service.getAll();
      let alpacaList: Array<Alpaca> = [];
      observable.subscribe(data => alpacaList = data);
      // And retrieve is called
      service.retrieve();
      tick();
      // When alpacaIsCalled
      service.addAlpaca('test3: new');
      tick();
      // Then a new Alpaca list should be emitted
      expect(alpacaList.length).toBe(4);
      // And it should contain the new alpaca
      expect(alpacaList[3].name).toBe('test3: new');
      // And alpacaRepositoryService.update should have been called
      expect(mockAlpacaRepositoryService.create).toHaveBeenCalledTimes(1);
    })));
  });

  describe('updateAlpaca', () => {
    it('should emit an updated list and call the webservice', fakeAsync(inject([
      AlpacaService,
      AlpacaRepositoryService
    ], (
      service: AlpacaService,
      mockAlpacaRepositoryService: MockAlpacaRepositoryService
    ) => {
      spyOn(mockAlpacaRepositoryService, 'update').and.callThrough();
      // Given an observable obtained with AlpacaService.getAll()
      const observable = service.getAll();
      let alpacaList: Array<Alpaca> = [];
      observable.subscribe(data => alpacaList = data);
      // And retrieve is called
      service.retrieve();
      tick();
      // When alpacaIsCalled
      service.updateAlpaca(1, new Alpaca('test1: new'));
      tick();
      // Then a new Alpaca list should be emitted
      expect(alpacaList.length).toBe(3);
      // And it should contain the new alpaca
      expect(alpacaList[1].name).toBe('test1: new');
      // And alpacaRepositoryService.update should have been called
      expect(mockAlpacaRepositoryService.update).toHaveBeenCalledTimes(1);
    })));
  });
});
