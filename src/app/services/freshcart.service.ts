import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';
import { ProductModel } from '../models/product.model';
import { StoreModel } from '../models/store.model';

@Injectable({
  providedIn: 'root'
})
export class FreshCartService {

  constructor(private http: HttpClient) { }

  // Categories methods
  getAllCategories() : Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>('https://6384fca14ce192ac60696c4b.mockapi.io/freshcart-categories');
  }

  
  // Stores methods
  getAllStores() : Observable<StoreModel[]> {
    return this.http.get<StoreModel[]>('https://6384fca14ce192ac60696c4b.mockapi.io/freshcart-stores');
  }

  // Products methods
  getAllProducts() : Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('https://6384fca14ce192ac60696c4b.mockapi.io/freshcart-products');
  }
}
