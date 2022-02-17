import { TestBed } from '@angular/core/testing';

import { ServicioUltimoService } from './servicio-ultimo.service';

describe('ServicioUltimoService', () => {
  let service: ServicioUltimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioUltimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
