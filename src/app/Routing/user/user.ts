import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  userData = signal({ name: '', role: '', email: '', city: '' });

  constructor(public route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userData.update((prevUserData) => ({
        ...prevUserData,
        name: params['name'],
        role: params['role'],
        email: params['email'],
        cty: params['city'],
      }));
    });
  }
}
