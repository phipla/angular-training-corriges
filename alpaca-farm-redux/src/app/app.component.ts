import { Component, OnInit } from '@angular/core';

import { AlpacaListStore } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AlpagaWare® AlpagaSoft™';

  constructor(
    alpacaStore: AlpacaListStore
  ) {
    console.log('constructor');
    alpacaStore.retrieve();
  }

  ngOnInit(): void {
    console.log('ngOnInit()')
  }
}
