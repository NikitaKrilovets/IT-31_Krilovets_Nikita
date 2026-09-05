import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from './services/student';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  students;

  newName: string = '';
  newAge: number | null = null;
  newGrade: number | null = null;

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  addStudent() {

    if (
      this.newName &&
      this.newAge !== null &&
      this.newGrade !== null
    ) {

      this.studentService.addStudent(
        this.newName,
        this.newAge,
        this.newGrade
      );

      this.newName = '';
      this.newAge = null;
      this.newGrade = null;
    }
  }

  removeStudent(id: number) {
    this.studentService.removeStudent(id);
  }
}