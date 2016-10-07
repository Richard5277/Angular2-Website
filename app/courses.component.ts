import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'my-courses',
    template:
    '<section><li *ngFor="let course of courses" class="course"><span><h2>Course Name: {{course.name}}</h2></span>' +
    '<h3>Instructor: {{course.instructor}}</h3>' +
    '<h4>ClassRoom: {{course.classRoom}}</h4>' +
    '<p>Course Discription: {{course.discription}}</p>' +
    '<button (click)="onSelect(course)" [class.selectedCourse]="course === selectedCourse">Detail</button></li></section>' +
    '<my-course-detail [course]="selectedCourse"></my-course-detail>',
    providers: [CourseService]
})
export class CoursesComponent implements OnInit {
    courses: Course[];
    selectedCourse: Course;
    constructor(private courseService: CourseService) { }
    getCourses(): void {
        this.courseService.getCourses().then(courses => this.courses = courses);
    }
    ngOnInit(): void {
        this.getCourses();
    }
    onSelect(Course: Course): void {
        this.selectedCourse = Course;
    }
}
