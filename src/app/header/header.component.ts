import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  public isCollapsed=true;

  constructor() { }

  ngOnInit() {
  }

  collapseMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
