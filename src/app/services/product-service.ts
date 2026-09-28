import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  products = [
    {
      id: 1,
      name: 'Ноутбук',
      manufacturer: 'Lenovo',
      description: 'Ноутбук для роботи та навчання'
    },
    {
      id: 2,
      name: 'Телефон',
      manufacturer: 'Samsung',
      description: 'Смартфон для щоденного використання'
    },
    {
      id: 3,
      name: 'Навушники',
      manufacturer: 'Sony',
      description: 'Бездротові навушники для музики'
    }
  ];

  getProducts() {
    return this.products;
  }

  addProduct(product: any) {
    product.id = this.products.length + 1;
    this.products.push(product);
  }

}
