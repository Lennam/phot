import { MessageService } from 'src/app/service/message.service';
import { CategoryService } from './../../service/category.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  name: string;
  value: string;
}

@Component({
  selector: 'app-category-form-dialog',
  templateUrl: './category-form-dialog.component.html',
  styleUrls: ['./category-form-dialog.component.sass']
})
export class CategoryFormDialogComponent implements OnInit {
  name = '';
  value = '';

  constructor(
    public dialogRef: MatDialogRef<CategoryFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public categoryService: CategoryService,
    public messageService: MessageService
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate() {
    // console.log(this.name)
    this.categoryService
      .createCategory({ name: this.name, value: this.value })
      .subscribe(result => {
        if (result.data.createCategory.name) {
          this.categoryService.createStatus(true);
          this.messageService.showSnackbar('success', '创建分类成功！');
        }
      });
  }
}
