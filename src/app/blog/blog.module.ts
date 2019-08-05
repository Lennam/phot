import { MarkdownModule } from 'ngx-markdown';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { CustomMaterialModule } from '../modules/customMarterialModule.module';
import { BlogListComponent } from '../components/blog-list/blog-list.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { CategoryComponent } from '../components/category/category.component';
import { CategoryBlogComponent } from './category-blog/category-blog.component';

@NgModule({
  declarations: [
    HomeComponent,
    BlogDetailComponent,
    BlogComponent,
    BlogListComponent,
    AboutMeComponent,
    CategoryComponent,
    CategoryBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CustomMaterialModule,
    MarkdownModule.forChild()
  ]
})
export class BlogModule {}
