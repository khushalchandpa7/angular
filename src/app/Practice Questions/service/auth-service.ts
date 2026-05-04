import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isSignup = signal(false);

  getSignupStatus() {
    return this.isSignup();
  }

  signup() {
    this.isSignup.set(true);
  }

  signout() {
    this.isSignup.set(false);
  }
}
