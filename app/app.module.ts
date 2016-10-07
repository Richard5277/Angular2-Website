
// System Module
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

// Custom Module
import { AppComponent }        from './app.component';
import { CourseDetailComponent } from './course-detail.component';
import { CoursesComponent }     from './courses.component';
import { CourseService }         from './course.service';
import { ScheduleComponent } from './schedule.component';
import { ContactComponent } from './contact.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/courses',
                pathMatch: 'full'
            },
            {
                path: 'courses',
                component: CoursesComponent
            },
            {
                path:'schedule',
                component: ScheduleComponent
            },
            {
                path:'contact',
                component:ContactComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        ScheduleComponent,
        ContactComponent,
        CourseDetailComponent,
        CoursesComponent
    ],
    providers: [
        CourseService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}
