import { TestBed, inject } from '@angular/core/testing';

import { InfoShareService } from './info-share.service';

describe('InfoShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoShareService]
    });
  });

  it('should be created', inject([InfoShareService], (service: InfoShareService) => {
    expect(service).toBeTruthy();
  }));
});
