import { Component, signal, Input, Output, WritableSignal, EventEmitter } from '@angular/core';

type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
};

@Component({
  selector: 'app-user-card',
  templateUrl: './user-cards.html',
  styleUrl: './user-cards.css',
})
export class UserCard {
  @Input() users?: UserData[];
}
