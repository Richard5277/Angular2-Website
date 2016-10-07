import { Component, Input } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'schedule-detail',
    template: `
    <div *ngIf="course">
        <h2>Course Schedule: {{course.schedule}}</h2>
    </div>
  `,
    styleUrls: [ '../css/schedule.css' ]
})
export class ScheduleDetailComponent {
    @Input()
    course: Course;
}