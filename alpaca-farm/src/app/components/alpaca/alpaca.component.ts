import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Alpaca } from '../../model/alpaca';

@Component({
  selector: 'app-alpaca',
  templateUrl: './alpaca.component.html',
  styleUrls: ['./alpaca.component.css']
})
export class AlpacaComponent implements OnInit {
  @Input() alpacaId: number;
  @Input() alpaca: Alpaca;
  @Input() background = '#fff';
  @Output() alpacaChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
