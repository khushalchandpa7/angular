import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(public route: Router) {}

  handleSubmit(evt: SubmitEvent) {
    evt.preventDefault();
  }

  goToHome() {
    this.route.navigate(['home'], {
      queryParams: {
        redirectedFrom: 'login',
      },
    });
  }
}
