import { Injectable } from '@angular/core';

import { Alpaca } from './alpaca';

@Injectable()
export class AlpacaService {
  private alpacas: Alpaca[] = [];

  constructor() { }

  getAlpacas() {
    return this.alpacas;
  }

  addAlpaca(name: string) {
    this.alpacas.push(new Alpaca(name));
  }

  updateAlpaca(index: number, newAlpaca: Alpaca) {
    this.alpacas[index] = newAlpaca;
  }
}
