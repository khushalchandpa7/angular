import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.html',
  template: `
    <div class="content">
      <ng-content />
    </div>
  `,
  styleUrl: './parent.css',
  imports: [Child],
})
export class Parent {
  userList = signal(['khushal', 'vidyut', 'jayesh', 'chirag']);
}
