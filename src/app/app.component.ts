import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
    <app-sidebar></app-sidebar>
        <div id="page-content-wrapper">
          <app-topmenu></app-topmenu>
          <router-outlet></router-outlet>
        </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 
}
