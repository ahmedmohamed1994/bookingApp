import { inject, TestBed } from '@angular/core/testing';

import { ConsUserGuard } from './cons-user.guard';

describe('ConsUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsUserGuard]
    });
  });

  it('should ...', inject([ConsUserGuard], (guard: ConsUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
