import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class Directive {
  isLogin = signal(true);

  users = signal([
    { id: 1, username: 'khuushaal' },
    { id: 2, username: 'ganesh' },
    { id: 3, username: 'vishnu' },
  ]);

  isSpecialTxt = signal(true);
  color = signal('green');
  bgColor = signal('lightseagreen');

  user = signal('');

  handleSubmit(e: Event) {
    e.preventDefault();
  }
}
