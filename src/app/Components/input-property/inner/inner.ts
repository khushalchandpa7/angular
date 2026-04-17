import { Component, model, ModelSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inner',
  imports: [FormsModule],
  templateUrl: './inner.html',
  styleUrl: './inner.css',
})
export class Inner {
  // count = model(0);
  // increment() {
  //   this.count.update((prevCount) => prevCount + 1);
  // }

  email = model('default@example.com');

  usd = model(0);

  get euroValue(): number {
    return this.usd() * 0.8475;
  }

  set euroValue(val: number) {
    this.usd.set(val / 0.8475);
  }
}
