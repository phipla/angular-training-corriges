import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaListComponent } from './alpaca-list.component';

xdescribe('AlpacaListComponent', () => {
  let component: AlpacaListComponent;
  let fixture: ComponentFixture<AlpacaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlpacaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpacaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
