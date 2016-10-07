import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'my-courses',
    template:
    '<div class="row">' +
    '<div class="col-xs-8"><div *ngFor="let course of courses" class="col-xs-10 course">' +
    '<span><h2>Course Name: {{course.name}}</h2></span>' +
    '<h3>Course Discription: {{course.discription}}</h3>' +
    '<img src="{{course.image}}" class="img-rounded"> ' +
    '<button (click)="onSelect(course)" [class.selectedCourse]="course === selectedCourse" class="btn btn-primary btn-sm">Detail</button></div></div>' +
    '<my-course-detail [course]="selectedCourse" class="col-xs-4"></my-course-detail></div>',
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
