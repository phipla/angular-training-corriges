import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaDetailComponent } from './alpaca-detail.component';

xdescribe('AlpacaDetailComponent', () => {
  let component: AlpacaDetailComponent;
  let fixture: ComponentFixture<AlpacaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlpacaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpacaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
