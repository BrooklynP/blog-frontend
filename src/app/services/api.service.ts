import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  private get(url: string): Promise<any> {
    return this.http.get(this.API_URL + url).toPromise();
  }

  private post(url: string, data: any): Promise<any> {
    return this.http.post(this.API_URL + url, data).toPromise();
  }

  public getAllPosts(): Promise<any> {
    return this.get('/allPosts');
  }

  public uploadPost(post: any): Promise<any> {
    return this.post('/posts', post);
  }
}
