import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Alpaca, AlpacaListStore } from '../../model';

import { Validators } from '@angular/forms';

@Component({
  selector: 'app-alpaca-list',
  templateUrl: './alpaca-list.component.html',
  styleUrls: ['./alpaca-list.component.css']
})
export class AlpacaListComponent {
  alpacas$: Observable<Alpaca[]>;

  constructor(
    private alpacaStore: AlpacaListStore,
  ) {
    this.alpacas$ = this.alpacaStore.getAlpacas();
  }

  addAlpaca(name: string) {
    this.alpacaStore.create(new Alpaca(name));
  }

  getColor(isEven: boolean) {
    return isEven ? '#fff' : '#ccf';
  }
}
