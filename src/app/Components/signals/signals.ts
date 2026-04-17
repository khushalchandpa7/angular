import { Component, signal, computed, effect, WritableSignal, Signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  // styleUrl: './signals.css',
  styleUrls: ['./signals.css', './common.css'],
})
export class Signals {
  /* 1. Signal :- Normal 'signal' to create & handle state. */

  count: WritableSignal<number> = signal<number>(0); // Data Type for 'signal()' is 'WritableSignal'.

  decCount() {
    if (this.count() > 0) {
      this.count.update((prevCount) => prevCount - 1);
    }
  }

  resetCount() {
    this.count.set(0); // 'set()' method is used to change the value of the signal.
  }

  incCount() {
    this.count.update((prevCount) => prevCount + 1); // 'update()' method is used to update the value of the signal on the basis of it's previous value.
  }

  // Practice Question:
  names: WritableSignal<string[]> = signal<string[]>([
    'khushal',
    'aadarsh',
    'bhanu-bhati',
    'ram',
    'chemical-locha',
  ]);

  addNewName() {
    this.names.update((name) => [...name, 'khuushaal']);
  }

  /* 2. Computed Signal :- This type of signals are readonly. It's value is depended on the other signal's value. It is derived from the another signal's value. */

  length: WritableSignal<number> = signal<number>(20);
  breadth: WritableSignal<number> = signal<number>(70);

  area: Signal<number> = computed<number>(() => this.length() * this.breadth()); // Data type for 'computed' signal is 'Signal'.

  /* 3. Effects */
  // 'effect()' runs when one or more signal value changes. It is similar to the 'useEffect()' hook in React.
  // Effect will only execute when the signal is used inside that 'effect()'.

  constructor() {
    effect(() => {
      this.count.update((count) => count++);
    });
  }

  /* Practice Question :- */
  value: WritableSignal<string> = signal<string>('');

  setValue(evt: any): void {
    this.value.set(evt.srcElement.value);
  }
}
