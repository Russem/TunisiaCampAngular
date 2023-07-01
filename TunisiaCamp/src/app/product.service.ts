import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from './shared/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = '/assets/db.json'; // Replace with the correct path to your db.json

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
