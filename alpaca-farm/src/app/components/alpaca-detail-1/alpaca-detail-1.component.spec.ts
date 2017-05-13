import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaDetail1Component } from './alpaca-detail-1.component';

describe('AlpacaDetail1Component', () => {
  let component: AlpacaDetail1Component;
  let fixture: ComponentFixture<AlpacaDetail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlpacaDetail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpacaDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
