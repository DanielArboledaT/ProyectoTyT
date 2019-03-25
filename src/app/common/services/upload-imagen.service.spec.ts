import { TestBed } from '@angular/core/testing';

import { UploadImagenService } from './upload-imagen.service';

describe('UploadImagenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadImagenService = TestBed.get(UploadImagenService);
    expect(service).toBeTruthy();
  });
});
