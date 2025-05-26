import { TestBed } from '@angular/core/testing';

import { TipoTemasService } from './tipo-temas.service';

describe('TipoTemasService', () => {
  let service: TipoTemasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoTemasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
