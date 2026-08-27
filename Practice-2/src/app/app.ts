import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  students = [
    { name: 'Анна', age: 18, grade: 11 },
    { name: 'Максим', age: 17, grade: 7 },
    { name: 'Олег', age: 18, grade: 5 },
  ];

  newName = '';
  newAge: number | null = null;
  newGrade: number | null = null;


  addStudent() {

    if (this.newName && this.newAge !== null && this.newGrade !== null) {

      this.students.push({
        name: this.newName,
        age: this.newAge,
        grade: this.newGrade
      });

      this.newName = '';
      this.newAge = null;
      this.newGrade = null;
    }

  }


  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

}