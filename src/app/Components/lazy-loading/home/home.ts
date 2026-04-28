import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LazyLoading } from '../../../Services/lazy-loading';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  isLoginOrSignup = inject(LazyLoading);

  ngOnInit(): void {
    console.log(this.isLoginOrSignup.getIsLogin());
  }
}
