import { Component, inject, signal } from '@angular/core';
import { Calc } from '../../Services/calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  calculator = inject(Calc);
  addition = signal(this.calculator.add(369, 69));
  subtract = signal(this.calculator.sub(369, 69));
  multiply = signal(this.calculator.mul(369, 69));
  division = signal(this.calculator.div(369, 69).toFixed(2));
}
