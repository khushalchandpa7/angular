import { Component, inject, signal } from '@angular/core';
import { ChildComp } from '../child-comp/child-comp';

@Component({
  selector: 'app-parent-comp',
  imports: [ChildComp],
  templateUrl: './parent-comp.html',
  styleUrl: './parent-comp.css',
})
export class ParentComp {
  selectUserName = signal<string>('');
  fetchedUsersFromChild = signal<string[]>([]);

  handleUsers(names: string[]) {
    this.fetchedUsersFromChild.set(names);
  }

  handleSelectedUser(idx: number) {
    this.selectUserName.set(this.fetchedUsersFromChild()[idx]);
  }

  handleDeleteUser(idx: number) {
    const deletedUser = this.fetchedUsersFromChild()[idx];
    if (deletedUser == this.selectUserName()) this.selectUserName.set('None');
    this.fetchedUsersFromChild.update((user) => user.filter((_, i) => i !== idx));
  }
}
