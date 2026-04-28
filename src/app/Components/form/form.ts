import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  // userForm = signal({
  //   username: '',
  //   password: '',
  // });

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormGroup({
      state: new FormControl(),
      pincode: new FormControl(),
    }),
  });

  handleSubmit(evt: any) {
    evt.preventDefault();
    evt.target[0].value = '';
    evt.target[1].value = '';
  }

  handleLogin() {
    this.userForm.value;
  }
}
