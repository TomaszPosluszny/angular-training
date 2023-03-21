import { TestBed } from '@angular/core/testing';

import { TomekService } from './tomek.service';

describe('TomekService', () => {
  let service: TomekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TomekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
