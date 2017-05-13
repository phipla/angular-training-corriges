import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async, ComponentFixture, TestBed
} from '@angular/core/testing';

import { AlpacaComponent } from './alpaca.component';
import { Alpaca } from '../../model';
import { CapitalizeFirstPipe } from '../../pipes/capitalize-first.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

describe('AlpacaComponent', () => {
  let component: AlpacaComponent;
  let fixture: ComponentFixture<AlpacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlpacaComponent,
        CapitalizeFirstPipe,
        HighlightDirective
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpacaComponent);
    component = fixture.componentInstance;
    component.alpacaId = 12;
    component.alpaca = new Alpaca('test name');
    fixture.detectChanges();
  });

  it('should display the alpaca\'s name', () => {
    expect(fixture.nativeElement.querySelector('.alpaca').innerHTML)
      .toContain('Test name');
    component.alpaca = new Alpaca('roberto');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.alpaca').innerHTML)
      .toContain('Roberto');
  });
});
