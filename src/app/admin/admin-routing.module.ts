import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { WriteComponent } from './write/write.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageArticleComponent } from './manage-article/manage-article.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [],
    children: [
      {
        path: '',
        canActivateChild: [],
        children: [
          { path: 'home', component: ManageHomeComponent },
          { path: 'artical', component: ManageArticleComponent },
          { path: 'artical/:id', component: ManageArticleComponent },
          { path: 'write', component: WriteComponent },
          { path: 'category', component: ManageCategoryComponent },
          { path: '', pathMatch: 'full', redirectTo: 'home' }
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
