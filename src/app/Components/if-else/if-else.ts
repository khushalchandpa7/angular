import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css',
})
export class IfElse {
  // 1. Login & Logout :-
  isLogin = signal(false);
  authenticateUser() {
    this.isLogin.set(!this.isLogin());
  }

  // 2. Select Hobby :-
  value: WritableSignal<string> = signal<string>('');
  showHobby(evt: Event) {
    let target = evt.target as HTMLSelectElement;
    this.value.set(target.value);
  }
}
