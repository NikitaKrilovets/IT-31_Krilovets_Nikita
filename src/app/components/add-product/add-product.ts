import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  name = '';
  manufacturer = '';
  description = '';

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  addProduct() {
  console.log('Кнопка працює');

  const product = {
    name: this.name,
    manufacturer: this.manufacturer,
    description: this.description
  };

  this.productService.addProduct(product);
  this.router.navigate(['/products']);
}

}
