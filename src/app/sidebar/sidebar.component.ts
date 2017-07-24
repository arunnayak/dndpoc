import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(){
      event.preventDefault();
      jQuery(".wrapper").toggleClass("active");
  }

}
