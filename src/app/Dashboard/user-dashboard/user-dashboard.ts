import { Component, signal } from '@angular/core';
import { UserCard } from '../user-cards/user-cards';

@Component({
  selector: 'app-user-dashboard',
  imports: [UserCard],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {
  userData = signal([
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      email: 'atuny0@sohu.com',
      username: 'atuny0',
    },
    {
      id: 2,
      firstName: 'Sheldon',
      lastName: 'Quigley',
      email: 'hbingley1@plala.or.jp',
      username: 'hbingley1',
    },
    {
      id: 3,
      firstName: 'Terrill',
      lastName: 'Hills',
      email: 'rshawe2@51.la',
      username: 'rshawe2',
    },
    {
      id: 4,
      firstName: 'Miles',
      lastName: 'Cummerata',
      email: 'mcummerata3@google.com.au',
      username: 'mcummerata3',
    },
    {
      id: 5,
      firstName: 'Mavis',
      lastName: 'Schultz',
      email: 'kmeus4@upenn.edu',
      username: 'kmeus4',
    },
  ]);
}
