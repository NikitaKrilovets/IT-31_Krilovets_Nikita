import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './courses-card.html',
  styleUrl: './courses-card.css'
})
export class CourseCardComponent {
  @Input() courseName = '';
  @Input() teacher = '';
}