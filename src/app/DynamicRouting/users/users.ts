import { Component, computed, OnInit, signal } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { RouterOutlet, ActivatedRoute, RouterLink } from '@angular/router';

type UsersIdAndName = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-users',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  constructor(
    public userService: UserService,
    public route: ActivatedRoute,
  ) {}

  allUsersIdAndName = signal<UsersIdAndName[]>([]);

  ngOnInit(): void {
    const usersIdAndName = this.userService.users().map((user) => {
      return { id: user.id, name: user.firstName.concat(' ', user.lastName) };
    });
    this.allUsersIdAndName.set(usersIdAndName);
  }
}
