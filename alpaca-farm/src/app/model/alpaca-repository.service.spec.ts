import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { AlpacaRepositoryService } from './alpaca-repository.service';
import { HttpModule, Http, XHRBackend, Connection, ConnectionBackend, Response, ResponseOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('AlpacaRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        AlpacaRepositoryService
      ]
    });
  });

  it('getAll should query a localhost url', inject([
    AlpacaRepositoryService,
    XHRBackend
  ], fakeAsync((
    service: AlpacaRepositoryService,
    mockBackend: MockBackend
  ) => {
    mockBackend.connections.subscribe((c: MockConnection) => {
      expect(c.request.url).toBe('http://localhost:3000/alpacas');
      expect(c.request.method).toBe(0);
      const response = new ResponseOptions({
        body: [ { name: 'Roberto'} ],
      });
      c.mockRespond(new Response(response));
    });
    let alpacaList: any;
    service.readAll().subscribe((data: any) => alpacaList = data)
    tick();
    expect(alpacaList.length).toBe(1);
    expect(alpacaList[0].name).toBe('Roberto');
  })));
});
