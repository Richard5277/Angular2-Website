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
var course_1 = require('./course');
var CourseDetailComponent = (function () {
    function CourseDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', course_1.Course)
    ], CourseDetailComponent.prototype, "course", void 0);
    CourseDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-course-detail',
            template: "\n            <div *ngIf=\"course\" class=\"fixed list-group \">\n                <span><h2 style=\"color: #f4f7f5;\">{{ course.name }}</h2></span>\n                <span class=\"list-group-item detail\">\n                    <h4 class=\"list-group-item-heading\">Course ID:</h4>\n                    <p class=\"list-group-item-text\">{{ course.id}}</p>\n                </span>\n                <span class=\"list-group-item detail\">\n                    <h4 class=\"list-group-item-heading\">Course Instructor:</h4>\n                    <p class=\"list-group-item-text\">{{ course.instructor}}</p>\n                </span>\n                <span class=\"list-group-item detail\">\n                    <h4 class=\"list-group-item-heading\">Classroom:</h4>\n                    <p class=\"list-group-item-text\">{{ course.classRoom}}</p>\n                </span>\n                <span class=\"list-group-item detail\">\n                    <h4 class=\"list-group-item-heading\">Resources:</h4>\n                    <p class=\"list-group-item-text\">{{ course.resource}}</p>\n                </span>\n                <span class=\"list-group-item detail\">\n                    <h4 class=\"list-group-item-heading\">Course Detail:</h4>\n                    <p class=\"list-group-item-text\">{{ course.detail}}</p>\n                </span>\n            </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
exports.CourseDetailComponent = CourseDetailComponent;
//# sourceMappingURL=course-detail.component.js.map