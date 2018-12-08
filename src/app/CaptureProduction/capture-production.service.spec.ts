import { TestBed } from '@angular/core/testing';

import { CaptureProductionService } from './capture-production.service';

describe('CaptureProductionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaptureProductionService = TestBed.get(CaptureProductionService);
    expect(service).toBeTruthy();
  });
});
