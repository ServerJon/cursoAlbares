import { TestBed, inject } from '@angular/core/testing';

import { PalabrasService } from './palabras.service';

describe('PalabrasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PalabrasService]
    });
  });

  it('should be created', inject([PalabrasService], (service: PalabrasService) => {
    expect(service).toBeTruthy();
  }));
});
