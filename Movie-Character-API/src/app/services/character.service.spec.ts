import { TestBed } from '@angular/core/testing';

import { CharactersService } from './character.service';

describe('GetCharacterService', () => {
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
