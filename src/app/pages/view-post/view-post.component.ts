import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserDataService } from 'src/app/services/user-data.service';

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

  private postID: number;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    public userData: UserDataService,
    private router: Router
    ) {

  }

  ngOnInit() {
    let posts;
    this.api.getAllPosts().then((res) => {
      posts = res;
    }).then(() => {

      this.route.params.forEach(params => {
        this.postID = params.id;
        this.postToView = posts[params.id];
      });
    });
  }

  public deletePost() {
    this.api.deletePost(this.postID);
    this.router.navigateByUrl('');
  }

}
