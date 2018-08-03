import { TestBed, inject } from '@angular/core/testing';

import { SeckillService } from './seckill.service';

describe('SeckillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeckillService]
    });
  });

  it('should be created', inject([SeckillService], (service: SeckillService) => {
    expect(service).toBeTruthy();
  }));
});
