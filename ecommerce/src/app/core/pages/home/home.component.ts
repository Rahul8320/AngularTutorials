import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../models/product';
import { ProductItemComponent } from '../../../shared/components/product-item/product-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.productList = res.products;
    });
  }
}
