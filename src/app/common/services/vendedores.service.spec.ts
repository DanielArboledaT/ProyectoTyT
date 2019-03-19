import { TestBed } from '@angular/core/testing';

import { VendedoresService } from './vendedores.service';

describe('VendedoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendedoresService = TestBed.get(VendedoresService);
    expect(service).toBeTruthy();
  });
});
