import { MessageService } from './../service/message.service';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageArticleComponent } from './manage-article/manage-article.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CustomMaterialModule } from '../modules/customMarterialModule.module';

@NgModule({
  declarations: [AdminComponent, ManageHomeComponent, ManageArticleComponent],
  imports: [CommonModule, CustomMaterialModule, AdminRoutingModule],
  providers: [MessageService]
})
export class AdminModule {}
