import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { CoursesComponent } from './courses/courses';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CoursesComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Practice-1');
}
