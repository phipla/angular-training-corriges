import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaListComponent } from './alpaca-list.component';
import { AlpacaService, Alpaca } from '../../model';

import { Observable } from 'rxjs/Observable';

describe('AlpacaListComponent', () => {
  let component: AlpacaListComponent;
  let fixture: ComponentFixture<AlpacaListComponent>;

  let mockAlpacaService: AlpacaService;

  beforeEach(async(() => {
    mockAlpacaService = <AlpacaService><any>{
      getAll() {
        return Observable.of([new Alpaca('test')]);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ AlpacaListComponent ],
      providers: [
        { provide: AlpacaService, useValue: mockAlpacaService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
