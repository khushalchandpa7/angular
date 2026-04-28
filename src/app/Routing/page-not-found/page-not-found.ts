import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  // imports: [RouterLink],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css',
})
export class PageNotFound {
  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['home']);
  }
}
