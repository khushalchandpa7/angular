import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetApi {
  private httpClient = inject(HttpClient);

  getProductList() {
    return this.httpClient.get<any>('https://dummyjson.com/products');
  }
}
