import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData = {
    isAdmin: true,
    userName: 'Brooklyn'
  };

  constructor() {
  }

  public getUserName() {
    return this.userData.userName;
  }

  public getUserAdminStatus() {
    return this.userData.isAdmin;
  }
}
