import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ViewPostComponent,
    AllPostsComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
