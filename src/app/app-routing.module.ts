import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AllPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
