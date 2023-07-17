import { TestBed } from '@angular/core/testing';

import { TodosPushBasedService } from './todos-push-based.service';

describe('TodosPushBasedService', () => {
  let service: TodosPushBasedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosPushBasedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
