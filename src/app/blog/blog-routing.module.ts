import { BlogListComponent } from './blog-list/blog-list.component';
import { CategoryBlogComponent } from './category-blog/category-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HomeComponent } from '../home/home.component';
import { BlogComponent } from './blog.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const blogRoutes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    canActivate: [],
    data: { animation: 'heroes' },
    children: [
      {
        path: '',
        canActivateChild: [],
        children: [
          // { path: 'home', component: HomeComponent },
          // { path: ':id', component: BlogDetailComponent },
          { path: 'list', component: BlogListComponent },
          { path: 'category/:category', component: CategoryBlogComponent },
          { path: '', pathMatch: 'full', redirectTo: 'list' }
        ]
      }
    ]
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent,
    data: { animation: 'hero' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
