import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal(false);

  login() {
    this.isLoggedIn.set(true);
    console.log(`login : ${this.isLoggedIn()}`);
  }

  logout() {
    this.isLoggedIn.set(false);
    console.log(`logout : ${this.isLoggedIn()}`);
  }
}
