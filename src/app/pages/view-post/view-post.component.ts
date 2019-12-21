import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  public postToView = {
    heading: '',
    author: '',
    content: ''
  };

  constructor(private route: ActivatedRoute, private api: ApiService) {

  }

  ngOnInit() {
    let posts;
    this.api.getAllPosts().then((res) => {
      posts = res;
    }).then(() => {

      this.route.params.forEach(params => {
        this.postToView = posts[params.id];
      });
    });
  }

}
