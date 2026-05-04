import { Component, inject, signal } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  stateOptions = signal([
    'AN',
    'AP',
    'AR',
    'AS',
    'BR',
    'CG',
    'CH',
    'DD',
    'DL',
    'GA',
    'GJ',
    'HP',
    'HR',
    'JH',
    'JK',
    'KA',
    'KL',
    'LA',
    'LD',
    'MH',
    'ML',
    'MN',
    'MP',
    'MZ',
    'NL',
    'OD',
    'PB',
    'PY',
    'RJ',
    'SK',
    'TG',
    'TN',
    'TR',
    'UP',
    'UT',
    'WB',
  ]);

  authService = inject(AuthService);
  router = inject(Router);

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  handleSubmit() {
    this.userForm.reset();
  }

  handleSignupClick() {
    if (!this.userForm.value) return;

    this.authService.signup();

    this.router.navigate(['/dashboard'], {
      queryParams: {
        username: 'khushal',
        password: 'khushal123',
      },
    });
    console.log(this.userForm.value);
  }
}
