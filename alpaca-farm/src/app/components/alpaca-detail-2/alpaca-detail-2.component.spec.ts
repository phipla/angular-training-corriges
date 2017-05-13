import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaDetail2Component } from './alpaca-detail-2.component';

describe('AlpacaDetail2Component', () => {
  let component: AlpacaDetail2Component;
  let fixture: ComponentFixture<AlpacaDetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlpacaDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpacaDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
