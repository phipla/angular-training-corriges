import { Component, OnInit } from '@angular/core';

import { AlpacaService } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AlpagaWare® AlpagaSoft™';

  constructor(
    alpacaService: AlpacaService
  ) {
    console.log('constructor');
    alpacaService.retrieve();
  }

  ngOnInit(): void {
    console.log('ngOnInit()')
  }
}
