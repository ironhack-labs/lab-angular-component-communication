import { TestBed } from '@angular/core/testing';

import { CharactersFromApiService } from './characters-from-api.service';

describe('CharactersFromApiService', () => {
  let service: CharactersFromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersFromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
