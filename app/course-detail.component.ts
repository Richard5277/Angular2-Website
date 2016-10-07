import { Component, Input } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'my-course-detail',
    template: `
    <div *ngIf="course">
      <h2>{{course.detail}}</h2>
    </div>
  `
})
export class CourseDetailComponent {
    @Input()
    course: Course;
}