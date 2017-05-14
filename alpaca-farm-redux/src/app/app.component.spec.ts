import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AlpacaListStore } from './model';

describe('AppComponent', () => {
  let alpacaStoreMock: AlpacaListStore;

  beforeEach(async(() => {
    alpacaStoreMock = <AlpacaListStore>{
      retrieve() {}
    };
    spyOn(alpacaStoreMock, 'retrieve');

    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        {
          provide: AlpacaListStore,
          useValue: alpacaStoreMock
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should call retrieve', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(alpacaStoreMock.retrieve).toHaveBeenCalled();
  }));

  it(`should have as title 'AlpagaWare® AlpagaSoft™'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AlpagaWare® AlpagaSoft™');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
      .toContain('AlpagaWare® AlpagaSoft™');
  }));
});
