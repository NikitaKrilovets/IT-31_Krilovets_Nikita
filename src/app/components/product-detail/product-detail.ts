import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.productService
      .getProducts()
      .find(product => product.id === id);
  }

}