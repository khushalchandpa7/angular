import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  currTheme: string = 'light';
  toggleTheme() {
    this.currTheme = this.currTheme === 'light' ? 'dark' : 'light';
  }

  getTheme(): string {
    return this.currTheme;
  }
}
