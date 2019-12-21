import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public headingInput: string;
  public summaryInput: string;
  public contentInput: string;

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  createBlogPost() {
    console.log('Submit Attempted');
    this.api.uploadPost({
      heading: this.headingInput ? this.headingInput : 'No Heading Supplied',
      author: 'brooklyn',
      summary: this.summaryInput ? this.summaryInput : 'No Summary Supplied',
      content: this.contentInput ? this.contentInput : 'No Content Supplied'
    });
  }

}
