import { Component, NgModule, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-container.html',
  styleUrl: './ng-container.css',
})
export class NgContainer {
  isLoggedin = signal(false);
  usernames = signal(['khushal', 'alex', 'adarsh', 'pankaj']);

  isLightTheme = signal(true);

  toggleTheme() {
    this.isLightTheme.set(!this.isLightTheme());
  }

  
}
