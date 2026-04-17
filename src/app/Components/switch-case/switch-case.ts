import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.html',
  styleUrl: './switch-case.css',
})
export class SwitchCase {
  userRole: WritableSignal<string> = signal<string>('');

  updateUserRole(role: string): void {
    this.userRole.set(role);
  }
}
