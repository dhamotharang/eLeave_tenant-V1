import { TestBed } from '@angular/core/testing';

import { PaginationDataService } from './pagination-data.service';

describe('PaginationDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginationDataService = TestBed.get(PaginationDataService);
    expect(service).toBeTruthy();
  });
});
