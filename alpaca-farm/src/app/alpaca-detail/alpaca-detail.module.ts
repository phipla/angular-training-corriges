import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlpacaDetailComponent } from './components/alpaca-detail/alpaca-detail.component';
import { AlpacaDetail1Component } from './components/alpaca-detail-1/alpaca-detail-1.component';
import { AlpacaDetail2Component } from './components/alpaca-detail-2/alpaca-detail-2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    AlpacaDetailComponent,
    AlpacaDetail1Component,
    AlpacaDetail2Component
  ],
  exports: [
    AlpacaDetailComponent
  ]
})
export class AlpacaDetailModule { }
