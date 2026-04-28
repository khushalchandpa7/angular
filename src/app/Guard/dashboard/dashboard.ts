import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  handleLogout() {
    this.authService.isLoggedIn.set(false); 
    this.router.navigate(['/login']);
  }
}
