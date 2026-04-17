import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  class = signal('user');
  isValidUserId = signal(false);
  saveChanges(event: Event) {
    alert('Changes Saved Successfully.');
  }
}
