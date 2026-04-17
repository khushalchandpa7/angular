import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {
  readonly users = signal([
    { id: 1, name: 'Khushal' },
    { id: 2, name: 'Vishnu' },
    { id: 3, name: 'Vidjut' },
    { id: 4, name: 'Adam' },
    { id: 5, name: 'Jemie' },
  ]);
}
