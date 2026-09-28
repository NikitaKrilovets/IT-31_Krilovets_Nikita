import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { AddProduct } from './components/add-product/add-product';
import { ProductDetail } from './components/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'products',
    component: Products
  },
  {
    path: 'products/add',
    component: AddProduct
  },
  {
    path: 'product/:id',
    component: ProductDetail
  }
];