import { ManageArticleComponent } from './manage-article/manage-article.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    children: [
      {
        path: '',
        canActivateChild: [],
        children: [
          { path: 'article', component: ManageArticleComponent },
          { path: '', component: HomeComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
