import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  stateOptions = signal<string[]>([
    'AP',
    'AR',
    'AS',
    'BR',
    'CG',
    'GA',
    'GJ',
    'HR',
    'HP',
    'JH',
    'KA',
    'KL',
    'MP',
    'MH',
    'MN',
    'ML',
    'MZ',
    'NL',
    'OD',
    'PB',
    'RJ',
    'SK',
    'TN',
    'TG',
    'TR',
    'UP',
    'UK',
    'WB',
  ]);

  signupForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    address: new FormGroup({
      state: new FormControl(),
      city: new FormControl(),
      zip: new FormControl(),
      contact: new FormGroup({
        phoneNo: new FormControl(),
        telephoneNo: new FormControl(),
      }),
    }),
  });

  onSubmit(): void {
    console.log(this.signupForm.value);
  }

  handleSubmit(): void {
    console.log(this.signupForm.value);
  }
}
