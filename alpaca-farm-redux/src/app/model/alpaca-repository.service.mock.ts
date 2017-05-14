import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Alpaca } from './alpaca';

import { AlpacaRepositoryService } from './alpaca-repository.service';

export class MockAlpacaRepositoryService {
  public data: Array<Alpaca|undefined>;

  constructor() {}

  public readAll(): Observable<Alpaca[]> {
    return Observable.of([ ... this.data ]);
  }

  public read(id: number): Observable<Alpaca> {
    return Observable.of({ ... this.data[id] });
  }

  public create(alpaca: Alpaca): Observable<Alpaca> {
    const newAlpaca = { ... alpaca };
    newAlpaca.id = this.data.length;
    this.data.push(newAlpaca);
    return Observable.of(newAlpaca);
  }

  public update(id: number, alpaca: Alpaca): Observable<Alpaca> {
    const newAlpaca = { ... alpaca };
    newAlpaca.id = id;
    this.data[id] = newAlpaca;
    return Observable.of(newAlpaca);
  }

  public delete(id: number): Observable<Alpaca> {
    return Observable.of({ ... this.data[id] });
  }
}
