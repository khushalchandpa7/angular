import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  route = inject(ActivatedRoute);

  from = signal('');

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.from.set(params['redirectedFrom']);
    });
  }

  router = inject(Router);

  /*  Router Navigate Programatically  */

  // Normal Routing
  handleClick1() {
    this.router.navigate(['/router-navigate']);
  }

  // Route Parameters
  handleLogin() {
    this.router.navigate(['/login', 'khushal']);
  }

  // Query Parameters
  handleQueryParams() {
    this.router.navigate(['/signup'], {
      queryParams: {
        username: 'khuushaal_chandpa_369',
      },
      relativeTo: this.route,
    });

    this.route.queryParams.subscribe((p) => {
      console.log(p);
    });
  }

  handleBack() {
    this.router.navigate(['..']);
  }
}
