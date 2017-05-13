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
import { AlpacaDetailComponent } from './components/alpaca-detail/alpaca-detail.component';

import { appRoutes } from './app.routes';

import {
  AlpacaService, AlpacaRepositoryService
} from './model';
import { AlpacaDetail1Component } from './components/alpaca-detail-1/alpaca-detail-1.component';
import { AlpacaDetail2Component } from './components/alpaca-detail-2/alpaca-detail-2.component';

@NgModule({
  declarations: [
    AppComponent,
    AlpacaComponent,
    TextInputComponent,
    HighlightDirective,
    CapitalizeFirstPipe,
    ZeroPaddingPipe,
    AlpacaListComponent,
    AlpacaDetailComponent,
    AlpacaDetail1Component,
    AlpacaDetail2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AlpacaService,
    AlpacaRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
