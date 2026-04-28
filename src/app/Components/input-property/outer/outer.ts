import { Component, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Inner } from '../inner/inner';

@Component({
  selector: 'app-outer',
  imports: [FormsModule, Inner],
  templateUrl: './outer.html',
})
export class Outer implements OnInit {
  parentEmail = signal('');

  ngOnInit(): void {
    console.log(this.parentEmail());
  }
  // budgetUsd = signal(100);
}
