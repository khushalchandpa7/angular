import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(public route: Router) {}

  handleSubmit(evt: SubmitEvent) {
    evt.preventDefault();
  }

  goToHome() {
    this.route.navigate(['home'], {
      queryParams: {
        redirectedFrom: 'signup',
      },
    });
  }

  router = inject(Router);
  handleBack() {
    this.router.navigate(['/../router-navigate']);
  }
} 
