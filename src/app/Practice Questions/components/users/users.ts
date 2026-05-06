import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../service/users-service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface User {
  id?: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userService = inject(UsersService);
  users$!: Observable<User[]>;
  users: User[] = [];

  // userForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.email),
  // });

  userForm = new FormGroup({
    id: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.fetchUsers();
    // this.addNewUser();
    // this.userService.getUserById('1').subscribe({
    //   next: (user) => {
    //     console.log(user);
    //   },
    // });
  }

  fetchUsers() {
    this.users$ = this.userService.getUsers();
    this.users$.subscribe({
      next: (actualData) => {
        this.users = actualData;
        console.log(this.users);
      },
    });
  }

  fetchedUser!: User;
  addUser() {
    if (this.userForm.valid) {
      const userId = this.userForm.value.id as string;
      this.userService.getUserById(userId).subscribe({
        next: (user) => {
          this.fetchedUser = user;
          console.log(this.fetchedUser);
        },
      });
    }
  }
}
