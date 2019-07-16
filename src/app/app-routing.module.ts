import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './blog/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { ManageComponent } from './manage/manage.component';
import { AdminModule } from './admin/admin.module';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogModule } from './blog/blog.module';

const routes: Routes = [
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  // },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: '', redirectTo: '/blog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
