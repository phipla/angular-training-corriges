import { TestBed, inject } from '@angular/core/testing';

import { AlpacaRepositoryService } from './alpaca-repository.service';

describe('AlpacaRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlpacaRepositoryService]
    });
  });

  it('should ...', inject([AlpacaRepositoryService], (service: AlpacaRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
