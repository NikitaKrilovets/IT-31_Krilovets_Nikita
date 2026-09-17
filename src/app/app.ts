import { Component, signal } from '@angular/core';
import { AddBook } from './components/add-book/add-book';

@Component({
  selector: 'app-root',
  imports: [AddBook],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Practice-5');
}
