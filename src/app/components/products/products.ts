import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products: any[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

}