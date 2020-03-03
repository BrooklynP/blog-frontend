import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AllPostsComponent
  },
  {
    path: 'allPosts',
    component: AllPostsComponent
  },
  {
    path: 'create',
    canActivate: [AuthGuardService],
    component: CreatePostComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: ':id',
    component: ViewPostComponent
  },
  {
    path: 'post/:id',
    component: ViewPostComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
