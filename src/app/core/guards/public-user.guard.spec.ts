import { inject, TestBed } from '@angular/core/testing';

import { PublicUserGuard } from './public-user.guard';

describe('PublicUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicUserGuard]
    });
  });

  it('should ...', inject([PublicUserGuard], (guard: PublicUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
