import { Component } from '@angular/core';

// import { Alpaca, AlpacaService } from './model/index';
import { Alpaca, AlpacaService } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, world!';
  alpacas: Alpaca[];
  test: string;

  constructor(
    private alpacaService: AlpacaService,
  ) {
    this.alpacas = this.alpacaService.getAlpacas();
  }

  addAlpaca(name: string) {
    this.alpacaService.addAlpaca(name);
  }

  getColor(isEven: boolean) {
    return isEven ? '#fff' : '#ccf';
  }
}
