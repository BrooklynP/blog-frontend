import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public userData: UserDataService
  ) { }

  ngOnInit() {
  }

  public closeSideMenu() {
    document.getElementById('sideMenu').style.width = '0px';

  }

  public openSideMenu() {
    document.getElementById('sideMenu').style.width = '250px';
  }
}
