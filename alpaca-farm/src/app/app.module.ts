import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlpacaComponent } from './components/alpaca/alpaca.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { ZeroPaddingPipe } from './pipes/zero-padding.pipe';
import { AlpacaListComponent } from './components/alpaca-list/alpaca-list.component';
import { AlpacaDetailModule } from './alpaca-detail';

import { appRoutes } from './app.routes';

import {
  AlpacaService, AlpacaRepositoryService
} from './model';

@NgModule({
  declarations: [
    AppComponent,
    AlpacaComponent,
    TextInputComponent,
    HighlightDirective,
    CapitalizeFirstPipe,
    ZeroPaddingPipe,
    AlpacaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AlpacaDetailModule,
  ],
  providers: [
    AlpacaService,
    AlpacaRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
