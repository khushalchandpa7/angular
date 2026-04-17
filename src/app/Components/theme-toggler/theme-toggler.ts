import { Component, signal, inject } from '@angular/core';
import { ThemeService } from '../../Services/ThemeService';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.html',
  styleUrl: './theme-toggler.css',
})
export class ThemeToggler {
  theme = inject(ThemeService);
  switchTheme() {
    console.log(`Current Theme : ${this.theme.currTheme}`);
    this.theme.toggleTheme();
  }

  updateBtnText() {
    return this.theme.currTheme === 'light' ? 'dark' : 'light';
  }
}
