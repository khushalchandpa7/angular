import { Component } from '@angular/core';
import { GlobalStateService } from '../../../Services/global-state';

@Component({
  selector: 'app-display-count',
  templateUrl: './display-count.html',
  styleUrl: './display-count.css',
})
export class DisplayCount {
  constructor(public state: GlobalStateService) {}
}
