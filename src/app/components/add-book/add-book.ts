import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {
   newBook = {
    title: '',
    author: '',
    description: ''
  };

  books = [
    {
      title: '1984',
      author: 'Джордж Орвелл',
      description: 'Роман про тоталітарне суспільство...'
    }
  ];

  addBook(form: NgForm) {
    if (form.valid) {
      this.books.push({
        title: this.newBook.title,
        author: this.newBook.author,
        description: this.newBook.description
      });

      this.newBook = {
        title: '',
        author: '',
        description: ''
      };

      form.resetForm();
    }
  }
}
