import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(public api: ApiService, private router: Router) { }

  posts;

  ngOnInit() {
    this.api.getAllPosts().then((res) => {
      this.posts = res;
    });
  }

  public goToPost(uid: number ) {
    this.router.navigate(['/' + uid]);
  }
}
