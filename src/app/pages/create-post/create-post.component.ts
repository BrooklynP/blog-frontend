import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  createBlogPost() {
    console.log('Submit Attempted');
    this.api.uploadPost({
      heading: 'Test Post',
      author: 'brooklyn',
      summary: 'This is a test post to the node JS server',
      content: 'This is a test post to the node JS server to see if it posts correctly'
    });
  }

}
