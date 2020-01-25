import { Injectable } from '@angular/core';
import { UserDataService } from './user-data.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate() {
    if (this.userData.getUserAdminStatus()) {
      return true;
    } else {
      window.alert('You do not have rights to view this page');
      return false;
    }
  }

  constructor(
    private userData: UserDataService
  ) { }
}
