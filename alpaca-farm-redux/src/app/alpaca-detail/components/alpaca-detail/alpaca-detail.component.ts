import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AlpacaListStore, Alpaca } from '../../../model';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-alpaca-detail',
  templateUrl: './alpaca-detail.component.html',
  styleUrls: ['./alpaca-detail.component.css']
})
export class AlpacaDetailComponent implements OnInit {
  private alpaca: Alpaca;

  private name: FormControl = new FormControl();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alpacaStore: AlpacaListStore
  ) {
    route.params
      .map(params => +params.id)
      .distinctUntilChanged()
      .mergeMap(id => this.alpacaStore.getAlpaca(id))
      .subscribe(alpaca => this.alpaca = alpaca);
  }

  ngOnInit() {
  }
}
