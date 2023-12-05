import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product?: Product;
}
