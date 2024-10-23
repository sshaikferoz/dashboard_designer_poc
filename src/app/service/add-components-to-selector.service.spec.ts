import { TestBed } from '@angular/core/testing';

import { AddComponentsToSelectorService } from './add-components-to-selector.service';

describe('AddComponentsToSelectorService', () => {
  let service: AddComponentsToSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddComponentsToSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
