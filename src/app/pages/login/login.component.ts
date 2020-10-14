import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import Amplify, { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor() {
    Amplify.configure({
      Auth: {
        region: 'eu-west-1',
      }
    });
   }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
  }

}
