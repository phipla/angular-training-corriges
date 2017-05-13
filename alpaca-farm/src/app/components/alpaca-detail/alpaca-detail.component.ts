import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlpacaService, Alpaca } from '../../model';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alpacaService: AlpacaService
  ) {
    route.params
      .map(params => +params.id)
      .distinctUntilChanged()
      .mergeMap(id => this.alpacaService.get(id))
      .subscribe(alpaca => this.alpaca = alpaca);
  }

  back() {
    history.back();
  }

  ngOnInit() {
  }
}
