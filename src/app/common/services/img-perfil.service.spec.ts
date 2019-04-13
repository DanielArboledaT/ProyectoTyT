import { TestBed } from '@angular/core/testing';

import { ImgPerfilService } from './img-perfil.service';

describe('ImgPerfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgPerfilService = TestBed.get(ImgPerfilService);
    expect(service).toBeTruthy();
  });
});
