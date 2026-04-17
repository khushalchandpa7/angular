import { Component } from '@angular/core';
import { GlobalStateService } from '../../../Services/global-state';

@Component({
  selector: 'app-update-count',
  templateUrl: './update-count.html',
  styleUrl: './update-count.css',
})
export class UpdateCount {
  constructor(public state: GlobalStateService) {}
}
