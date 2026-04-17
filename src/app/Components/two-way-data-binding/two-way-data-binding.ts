import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.html',
  imports: [FormsModule],
  styleUrl: './two-way-data-binding.css',
})
export class TwoWayDataBinding {
  kg: number | null = null;
  lbs: number | null = null;

  kgToLbs(newLbs: number) {
    this.lbs = Number((newLbs * 2.20462).toFixed(3));
  }

  lbsToKg(newKg: number) {
    this.kg = Number((newKg / 2.20462).toFixed(3));
  }
}
