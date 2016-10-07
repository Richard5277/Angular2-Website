import { Component, Input } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'my-course-detail',
    template:`
            <div *ngIf="course" class="fixed list-group ">
                <span><h2 style="color: #f4f7f5;">{{ course.name }}</h2></span>
                <span class="list-group-item detail">
                    <h4 class="list-group-item-heading">Course ID:</h4>
                    <p class="list-group-item-text">{{ course.id}}</p>
                </span>
                <span class="list-group-item detail">
                    <h4 class="list-group-item-heading">Course Instructor:</h4>
                    <p class="list-group-item-text">{{ course.instructor}}</p>
                </span>
                <span class="list-group-item detail">
                    <h4 class="list-group-item-heading">Classroom:</h4>
                    <p class="list-group-item-text">{{ course.classRoom}}</p>
                </span>
                <span class="list-group-item detail">
                    <h4 class="list-group-item-heading">Resources:</h4>
                    <p class="list-group-item-text">{{ course.resource}}</p>
                </span>
                <span class="list-group-item detail">
                    <h4 class="list-group-item-heading">Course Detail:</h4>
                    <p class="list-group-item-text">{{ course.detail}}</p>
                </span>
            </div>
`

})
export class CourseDetailComponent {
    @Input()
    course: Course;
}

