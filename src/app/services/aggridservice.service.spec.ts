import { TestBed } from '@angular/core/testing';

import { AggridserviceService } from './aggridservice.service';

describe('AggridserviceService', () => {
  let service: AggridserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggridserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
