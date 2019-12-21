import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public closeSideMenu() {
    document.getElementById('sideMenu').style.width = '0px';

  }

  public openSideMenu() {
    document.getElementById('sideMenu').style.width = '250px';
  }
}
