import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { appRoutes } from './app.routes';
import { appReducer } from './app.reducer';

import { AppComponent } from './app.component';
import { AlpacaComponent } from './components/alpaca/alpaca.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { ZeroPaddingPipe } from './pipes/zero-padding.pipe';
import { AlpacaListComponent } from './components/alpaca-list/alpaca-list.component';
import { AlpacaDetailModule } from './alpaca-detail';

import {
  AlpacaListStore, AlpacaRepositoryService, AlpacaListEffects
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
    StoreModule.provideStore(appReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    RouterStoreModule.connectRouter(),
    EffectsModule.run(AlpacaListEffects),
    AlpacaDetailModule,
  ],
  providers: [
    AlpacaListStore,
    AlpacaRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
