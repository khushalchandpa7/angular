import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Inner } from '../inner/inner';

@Component({
  selector: 'app-outer',
  imports: [FormsModule, Inner],
  templateUrl: './outer.html',
})
export class Outer {
  parenEmail = signal('');
  budgetUsd = signal(100);
}
