import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Alpaca, AlpacaService } from '../../model';

import { Validators } from '@angular/forms';

@Component({
  selector: 'app-alpaca-list',
  templateUrl: './alpaca-list.component.html',
  styleUrls: ['./alpaca-list.component.css']
})
export class AlpacaListComponent {
  alpacas$: Observable<Alpaca[]>;

  constructor(
    private alpacaService: AlpacaService,
  ) {
    this.alpacas$ = this.alpacaService.getAll();
  }

  addAlpaca(name: string) {
    this.alpacaService.addAlpaca(name);
  }

  getColor(isEven: boolean) {
    return isEven ? '#fff' : '#ccf';
  }
}
