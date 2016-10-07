"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var course_service_1 = require('./course.service');
var CoursesComponent = (function () {
    function CoursesComponent(courseService) {
        this.courseService = courseService;
    }
    CoursesComponent.prototype.getCourses = function () {
        var _this = this;
        this.courseService.getCourses().then(function (courses) { return _this.courses = courses; });
    };
    CoursesComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    CoursesComponent.prototype.onSelect = function (Course) {
        this.selectedCourse = Course;
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'my-courses',
            template: '<section><li *ngFor="let course of courses" class="course"><span><h2>Course Name: {{course.name}}</h2></span>' +
                '<h3>Instructor: {{course.instructor}}</h3>' +
                '<h4>ClassRoom: {{course.classRoom}}</h4>' +
                '<p>Course Discription: {{course.discription}}</p>' +
                '<button (click)="onSelect(course)" [class.selectedCourse]="course === selectedCourse">Detail</button></li></section>' +
                '<my-course-detail [course]="selectedCourse"></my-course-detail>',
            providers: [course_service_1.CourseService]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map