import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AlpacaDetailComponent } from './alpaca-detail.component';
import { AlpacaListStore, Alpaca } from '../../../model';

import { Observable } from 'rxjs/Observable';

describe('AlpacaDetailComponent', () => {
  let component: AlpacaDetailComponent;
  let fixture: ComponentFixture<AlpacaDetailComponent>;
  let mockAlpacaStore: AlpacaListStore;

  beforeEach(async(() => {
    mockAlpacaStore = <AlpacaListStore><any>{
      getAlpaca() {
        return Observable.of(new Alpaca('test'));
      }
    };

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ AlpacaDetailComponent ],
      providers: [
        { provide: AlpacaListStore, useValue: mockAlpacaStore }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
