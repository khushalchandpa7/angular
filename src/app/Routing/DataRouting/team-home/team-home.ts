import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-team-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './team-home.html',
  styleUrl: './team-home.css',
})
export class TeamHome {}
