import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterPreloader } from '@angular/router';
import { AuthService } from '../../Services/auth-service';

export const authGuard: CanActivateFn = () => {
  const authGuard = inject(AuthService);
  const router = inject(Router);

  if (authGuard.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
