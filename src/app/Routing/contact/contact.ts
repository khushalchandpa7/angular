import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  // constructor(private route: ActivatedRoute) {}

  route = inject(ActivatedRoute);
  ngOnInit(): void {
    console.log(this.route.params);
  }

  // ngOnInit(): void {
  //   this.route.params.subscribe((params) => {
  //     console.log(params);
  //   });
  // }
}
