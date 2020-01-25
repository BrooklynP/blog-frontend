import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData = {
    isAdmin: true,
  };

  constructor() {
  }

  public getUserAdminStatus() {
    return this.userData.isAdmin;
  }
}
