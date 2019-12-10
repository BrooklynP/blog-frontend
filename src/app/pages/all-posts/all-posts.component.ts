import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(public api: ApiService) { }

  posts;

  ngOnInit() {
    this.api.getAllPosts().then((res) => {
      this.posts = res;
      console.log(res);
    });
  }

}
