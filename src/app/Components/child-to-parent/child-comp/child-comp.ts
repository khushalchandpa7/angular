import { Component, EventEmitter, signal, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.html',
  styleUrl: './child-comp.css',
})
export class ChildComp {
  @Output() selectedUsers = new EventEmitter<string[]>();
  @Output() deleteUserIdx = new EventEmitter<number>();
  @Output() selectUserIdx = new EventEmitter<number>();

  users = signal<string[]>([]);

  handleSubmit(evt: any) {
    evt.preventDefault();
    evt.target[0].value = '';
  }

  handleClick(evt: any) {
    let userName = evt.target.previousElementSibling.value.trim();
    if (userName) {
      this.addUser(userName);
      this.selectedUsers.emit(this.users());
    }
  }

  addUser(username: string) {
    if (!username) return;
    this.users.update((users) => [...users, username]);
  }

  handleSelectUserClick(idx: number) {
    this.selectUserIdx.emit(idx);
  }

  handleDeleteUserClick(idx: number) {
    this.users.update((users) => users.filter((_, i) => i !== idx));
    this.deleteUserIdx.emit(idx);
  }
}
