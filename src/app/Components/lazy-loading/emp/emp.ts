import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-emp',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './emp.html',
  styleUrl: './emp.css',
})
export class Emp {}
