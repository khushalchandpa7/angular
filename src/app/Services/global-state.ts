import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalStateService {
  counter = signal<number>(0);

  increment(): void {
    this.counter.update((counter) => counter + 1);
  }

  decrement(): void {
    if (this.counter() > 0) this.counter.update((counter) => counter - 1);
  }

  reset(): void {
    this.counter.set(0);
  }

  displayCount(): number {
    return this.counter();
  }
}
