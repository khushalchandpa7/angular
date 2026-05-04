import { Component, inject, OnInit, signal } from '@angular/core';
import { GetApi } from '../../service/get-products-api';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class TodoList implements OnInit {
  public getProductsService = inject(GetApi);
  productList = signal<any[]>([]);

  ngOnInit(): void {
    this.getProductsService.getProductList().subscribe((res) => {
      this.productList.set(res.products);
      console.log(res.products);
    });
  }
}
