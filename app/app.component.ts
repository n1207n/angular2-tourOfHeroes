import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <nav>
      <a routerlink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerlink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
