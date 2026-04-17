import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  userNames = input<string[]>([]);
}
