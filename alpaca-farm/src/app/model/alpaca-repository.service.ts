import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Alpaca } from './alpaca'

interface AlpacaData {
  name: string;
  age ?: number;
  height ?: number;
}

function createAlpaca(data: AlpacaData) {
  return new Alpaca(
    data.name, data.age, data.height,
  );
}

@Injectable()
export class AlpacaRepositoryService {
  private readonly url = 'http://localhost:3000/alpacas';

  constructor(
    private http: Http
  ) { }

  public readAll(): Observable<Alpaca[]> {
    return this.http.get(this.url)
      .map(response => response.json().map(createAlpaca));
  }

  public read(id: number): Observable<Alpaca> {
    return this.http.get(`${this.url}/${id}`)
      .map(data => createAlpaca(data.json()));
  }

  public create(alpaca: Alpaca): Observable<Alpaca>  {
    return this.http.post(this.url, alpaca)
      .map(data => createAlpaca(data.json()));
  }

  public update(id: number, alpaca: Alpaca): Observable<Alpaca> {
    return this.http.put(`${this.url}/${id}`, alpaca)
      .map(data => createAlpaca(data.json()));
  }

  public delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
      .map(data => createAlpaca(data.json()));
  }
}