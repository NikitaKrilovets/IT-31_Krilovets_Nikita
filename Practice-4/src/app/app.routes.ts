import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Books } from './components/books/books';
import { BookDetail } from './components/book-detail/book-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'books',
    component: Books,
  },
  {
    path: 'book/:id',
    component: BookDetail,
  },
];