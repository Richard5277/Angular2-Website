import  { Component, OnInit } from '@angular/core';

import { Course } from './course';
import { CourseService } from './course.service';

@Component ({
    moduleId: module.id,
    selector: 'schedule',
    templateUrl: 'schedule.component.html',
    styleUrls: [ '../css/schedule.css' ]
})

export class ScheduleComponent implements OnInit {

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

