import { MarkdownModule } from 'ngx-markdown';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { CustomMaterialModule } from '../modules/customMarterialModule.module';
import { BlogItemComponent } from '../components/blog-item/blog-item.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { CategoryComponent } from '../components/category/category.component';
import { CategoryBlogComponent } from './category-blog/category-blog.component';
import { CategoryListComponent } from '../components/category-list/category-list.component';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    BlogDetailComponent,
    BlogComponent,
    BlogItemComponent,
    AboutMeComponent,
    CategoryComponent,
    CategoryBlogComponent,
    CategoryListComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CustomMaterialModule,
    MarkdownModule.forChild()
  ]
})
export class BlogModule {}
