import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly API_URL = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  get(url: string): Promise<any> {
    return this.http.get(this.API_URL + url).toPromise();
  }

  getAllPosts(): Promise<any> {
    return this.get('/allPosts');
  }
}
