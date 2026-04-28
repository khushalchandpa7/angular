import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  handleLogin() {
    this.authService.isLoggedIn.set(true);
    this.router.navigate(['/dashboard']);
  }
}
