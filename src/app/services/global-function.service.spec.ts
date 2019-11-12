import { TestBed } from '@angular/core/testing';

import { GlobalFunctionService } from './global-function.service';

describe('GlobalFunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalFunctionService = TestBed.get(GlobalFunctionService);
    expect(service).toBeTruthy();
  });
});
