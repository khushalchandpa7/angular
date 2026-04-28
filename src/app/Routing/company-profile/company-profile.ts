import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  imports: [RouterLink],
  templateUrl: './company-profile.html',
  styleUrl: './company-profile.css',
})
export class CompanyProfile {
  firstName = signal('Khushal');
  lastName = signal('Chandpa');
}
