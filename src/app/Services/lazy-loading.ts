import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LazyLoading {
  private readonly isLogin = signal(true);

  getIsLogin(): boolean {
    return this.isLogin();
  }
}
