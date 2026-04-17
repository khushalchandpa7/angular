import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-setter-getter',
  imports: [FormsModule],
  templateUrl: './signal-setter-getter.html',
  styleUrl: './signal-setter-getter.css',
})
export class SignalSetterGetter {
  /* If we want to use Signal's value for two way binding we need to create setter & getter function. */
  username = model('');

  // get userName() {
  //   return this.username();
  // }

  // set userName(val: string) {
  //   console.log(val);
  // }
}
