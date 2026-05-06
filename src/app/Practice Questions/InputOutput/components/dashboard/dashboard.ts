import { Component, inject, Input, OnInit, Output, signal } from '@angular/core';
import { UserCard } from '../user-card/user-card';
import { UserService } from '../../service/user-service';
import { User } from '../../module/user-module';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-dashboard',
  imports: [UserCard, CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  userService = inject(UserService);
  users = signal<User[]>([]);
  isAddUserModalOpen = signal(false);
  isEditUserModalOpen = signal(false);
  editingMemberId = signal<string>('');
  showSuccessMessage = signal(false);

  addMemberForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    department: new FormControl('', Validators.required),
  });

  editMemberForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.fetchUsers();
  }

  openAddModal() {
    this.isAddUserModalOpen.set(true);
  }

  closeAddModal() {
    this.isAddUserModalOpen.set(false);
  }

  openEditModal() {
    this.isEditUserModalOpen.set(true);
  }

  closeEditModal() {
    this.isEditUserModalOpen.set(false);
  }

  fetchUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => this.users.set(users),
    });
  }

  deleteUserById(memberId: string) {
    this.userService.deleteUserById(memberId).subscribe({
      next: () => {
        const updatedUsers = this.users().filter((user) => user.id !== memberId);
        this.users.set(updatedUsers);
      },
    });
  }

  handleSaveMember() {
    this.openAddModal();
    const newUserPayload = {
      name: this.addMemberForm.value.name!,
      email: this.addMemberForm.value.email!,
      role: this.addMemberForm.value.role!,
      department: this.addMemberForm.value.department!,
      status: 'Active',
    };
    if (this.addMemberForm.valid) {
      this.userService.addUser(newUserPayload).subscribe({
        next: (user) => this.users.update((users) => [...users, user]),
      });
      this.addMemberForm.reset();
      this.closeAddModal();
    }
    confetti({
      particleCount: 250,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
    });
    this.showSuccessMessage.set(true);
    setTimeout(() => {
      this.showSuccessMessage.set(false);
    }, 3000);
  }

  handleAddUserCancel() {
    this.addMemberForm.reset();
    this.closeAddModal();
  }

  handleEditUserCancel() {
    this.editMemberForm.reset();
    this.closeEditModal();
  }

  handleEditMember() {
    const updatedPayload = {
      name: this.editMemberForm.value.name!,
      email: this.editMemberForm.value.email!,
      role: this.editMemberForm.value.role!,
      department: this.editMemberForm.value.department!,
      status: 'Active',
    };
    this.userService.updateUserById(this.editingMemberId(), updatedPayload).subscribe({
      next: (updatedData) => {
        // this.users.update((fetchedUser) => {
        //   return this.fetchUsers.filter((user) => {
        //     if (user.id === updatedData.id) {
        //     }
        //   });
        // });
        console.log(updatedData);
      },
    });
    // this.closeEditModal();
  }

  editMember(memberId: string) {
    this.editingMemberId.set(memberId);
    this.openEditModal();
    this.userService.getUserById(memberId).subscribe({
      next: (user) => {
        this.editMemberForm.patchValue({
          name: user.name,
          email: user.email,
          role: user.role,
          department: user.department,
        });
      },
    });
    console.log(memberId);
  }
}
