import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlpacaComponent } from './components/alpaca/alpaca.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { ZeroPaddingPipe } from './pipes/zero-padding.pipe';

import { AlpacaService } from './model/alpaca.service';

@NgModule({
  declarations: [
    AppComponent,
    AlpacaComponent,
    TextInputComponent,
    HighlightDirective,
    CapitalizeFirstPipe,
    ZeroPaddingPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    AlpacaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
