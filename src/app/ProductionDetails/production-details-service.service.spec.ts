import { TestBed } from '@angular/core/testing';

import { ProductionDetailsServiceService } from './production-details-service.service';

describe('ProductionDetailsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductionDetailsServiceService = TestBed.get(ProductionDetailsServiceService);
    expect(service).toBeTruthy();
  });
});
