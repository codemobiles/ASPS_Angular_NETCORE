import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenGuard } from './authen.guard';

describe('AuthenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenGuard]
    });
  });

  it('should ...', inject([AuthenGuard], (guard: AuthenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
