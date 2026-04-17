import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  username = signal('Khushal');
  class = signal('profile');
  isAdmin = signal(true);
  cancelSubscription(event: Event) {
    alert('Subscription Cancelled.');
  }
}
