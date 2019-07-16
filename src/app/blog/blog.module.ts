import { MarkdownModule } from 'ngx-markdown';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BlogComponent } from './blog.component';
import { CustomMaterialModule } from '../modules/customMarterialModule.module';

@NgModule({
  declarations: [HomeComponent, BlogDetailComponent, BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CustomMaterialModule,
    MarkdownModule.forChild()
  ]
})
export class BlogModule {}
