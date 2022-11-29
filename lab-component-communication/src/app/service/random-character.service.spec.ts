import { TestBed } from '@angular/core/testing';

import { RandomCharacterService } from './random-character.service';

describe('RandomCharacterService', () => {
  let service: RandomCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
