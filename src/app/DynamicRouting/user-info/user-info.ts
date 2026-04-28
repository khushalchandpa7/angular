import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/user-service';
import { ConstantPool } from '@angular/compiler';

type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  profession: string;
};

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo implements OnInit {
  // constructor(public route: Router) {}
  constructor(
    public route: ActivatedRoute,
    public userService: UserService,
  ) {}

  userData = signal<UserData[]>([]);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const selectedUser = this.userService.users().filter((user) => {
        return user.id == params['id'];
      });
      this.userData.set(selectedUser);
    });
  }
}
