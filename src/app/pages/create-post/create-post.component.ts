import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public headingInput: string;
  public summaryInput: string;
  public contentInput: string;

  constructor(public api: ApiService, private router: Router, private userData: UserDataService) { }

  ngOnInit() {
  }

  createBlogPost() {
    this.api.uploadPost({
      heading: this.headingInput ? this.headingInput : 'No Heading Supplied',
      author: this.userData.getUserName(),
      summary: this.summaryInput ? this.summaryInput : 'No Summary Supplied',
      content: this.contentInput ? this.contentInput : 'No Content Supplied'
    });
    this.router.navigateByUrl('');
  }

}
