import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../module/user-module';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input() user!: User;
  @Output() deleteCurrUser = new EventEmitter<string>();
  @Output() editCurrMember = new EventEmitter<string>();

  deleteUser(): void {
    this.deleteCurrUser.emit(this.user.id);
  }

  editMember(): void {
    this.editCurrMember.emit(this.user.id);
  }
}
