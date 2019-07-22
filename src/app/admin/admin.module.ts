import { OperationWarnDialogComponent } from 'src/app/components/operation-warn-dialog/operation-warn-dialog.component';
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

@NgModule({
  entryComponents: [OperationWarnDialogComponent],

  declarations: [
    AdminComponent,
    ManageHomeComponent,
    ManageArticleComponent,
    WriteComponent,
    OperationWarnDialogComponent
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
