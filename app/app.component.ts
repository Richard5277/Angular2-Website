import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <div class="row">    
    <nav class="navbar navbar-inverse navbar-fixed-top col-xs-10 vertical-center" style="left: 8vw;">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Zop</a>
            </div>
        <ul class="nav navbar-nav" style="padding-left: 6rem;">
          <li><a routerLink="/courses" routerLinkActive="active">My Courses</a></li>
          <li><a routerLink="/schedule" routerLinkActive="active">Schedule</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
      </div>
    </nav>
    
    <div class="col-xs-10 main">
    <router-outlet></router-outlet>
    </div>
    </div>
  `
})
export class AppComponent {
}
