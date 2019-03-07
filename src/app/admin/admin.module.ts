import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ManageArticleComponent } from './manage-article/manage-article.component';

@NgModule({
  declarations: [HomeComponent, ArticleComponent, ManageArticleComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
