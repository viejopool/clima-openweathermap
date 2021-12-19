import { TestBed } from '@angular/core/testing';

import { ClimaciudadService } from './climaciudad.service';

describe('ClimaciudadService', () => {
  let service: ClimaciudadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaciudadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
