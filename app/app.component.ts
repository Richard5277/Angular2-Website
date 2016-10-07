import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>Zop</h1>
    <nav><a class="menu" routerLink="/courses" routerLinkActive="active">My Courses</a>
    <a class="menu" routerLink="/schedule" routerLinkActive="active">Schedule</a>
    <a class="menu" routerLink="/contact" routerLinkActive="active">Contact</a></nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
