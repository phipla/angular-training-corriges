import { TestBed, inject } from '@angular/core/testing';

import { AlpacaService } from './alpaca.service';

describe('AlpacaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlpacaService]
    });
  });

  it('should ...', inject([AlpacaService], (service: AlpacaService) => {
    expect(service).toBeTruthy();
  }));
});
