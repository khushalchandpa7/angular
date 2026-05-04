import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { StoreSignupStatusToDB } from '../../service/store-to-db';

export type UserInfo = {
  username: string;
  password: string;
};

@Component({
  selector: 'app-user-dashboard',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard implements OnInit {
  storeToDB = inject(StoreSignupStatusToDB);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['username']) {
        this.storeToDB.storeToDB(true);
      }
    });
  }
}
