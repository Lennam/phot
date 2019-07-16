import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { MessageService } from './../service/message.service';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageArticleComponent } from './manage-article/manage-article.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CustomMaterialModule } from '../modules/customMarterialModule.module';
import { WriteComponent } from './write/write.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AdminComponent,
    ManageHomeComponent,
    ManageArticleComponent,
    WriteComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forChild()
  ],
  providers: [MessageService]
})
export class AdminModule {}
