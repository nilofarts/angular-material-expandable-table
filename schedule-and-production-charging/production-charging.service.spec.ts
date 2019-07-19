import { TestBed } from '@angular/core/testing';

import { ProductionChargingService } from './production-charging.service';

describe('ProductionChargingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductionChargingService = TestBed.get(ProductionChargingService);
    expect(service).toBeTruthy();
  });
});
