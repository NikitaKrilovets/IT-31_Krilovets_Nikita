import { Component } from '@angular/core';
import { CourseCardComponent } from './courses-card/courses-card';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class CoursesComponent {

}