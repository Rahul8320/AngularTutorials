import { Injectable } from '@angular/core';
import { Product } from '../../core/models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.productUrl);
  }
}
