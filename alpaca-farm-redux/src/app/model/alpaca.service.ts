import { Injectable } from '@angular/core';
import { AlpacaRepositoryService } from './alpaca-repository.service';
import { Alpaca } from './alpaca';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AlpacaService {
  private alpacas: Alpaca[] = [];
  private observable$: BehaviorSubject<Alpaca[]> =
    new BehaviorSubject([]);

  constructor(
    private alpacaRepositoryService: AlpacaRepositoryService
  ) {
  }

  retrieve() {
    this.alpacaRepositoryService.readAll()
      .subscribe(arr => {
        this.alpacas = [ ...arr ];
        this.observable$.next(arr);
      });
  }

  getAll(): Observable<Alpaca[]> {
    return this.observable$;
  }

  get(id: number): Observable<Alpaca> {
    return this.observable$
      .map(
        alpacaArray => alpacaArray
          .filter(Boolean)
          .filter(
            alpaca => alpaca.id === id
          )[0]
      );
  }

  addAlpaca(name: string): void {
    this.alpacaRepositoryService
      .create(new Alpaca(name))
      .subscribe(newAlpaca => {
        this.alpacas = [ ...this.alpacas, newAlpaca ];
        this.observable$.next(this.alpacas);
      });
  }

  updateAlpaca(index: number, newAlpaca: Alpaca) {
    this.alpacaRepositoryService
      .update(index, newAlpaca)
      .subscribe(updatedAlpaca => {
        this.alpacas = this.alpacas.map(
          alpaca => alpaca.id === updatedAlpaca.id
            ? updatedAlpaca
            : alpaca
          );
        this.observable$.next(this.alpacas);
      });
  }
}
