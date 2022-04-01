import { TestBed } from '@angular/core/testing';

import { UsuarioInterceptorService } from './usuario-interceptor.service';

describe('UsuarioInterceptorService', () => {
  let service: UsuarioInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
