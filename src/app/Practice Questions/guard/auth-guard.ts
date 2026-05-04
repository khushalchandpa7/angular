import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth-service';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (
  route,
  state,
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.getSignupStatus()) {
    return true;
  }
  router.navigate(['login']);
  return false;
};
