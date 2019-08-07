import { MessageService } from 'src/app/service/message.service';
import { CategoryFormDialogComponent } from '../../components/category-form-dialog/category-form-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { CategoryService } from 'src/app/service/category.service';
import { OperationWarnDialogComponent } from 'src/app/components/operation-warn-dialog/operation-warn-dialog.component';

export interface Category {
  name: string;
  value: string;
}

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent implements OnInit {
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;
  dataSource: [] = [];
  constructor(
    public dialog: MatDialog,
    public categoryService: CategoryService,
    public messageService: MessageService
  ) {
    categoryService.createStatus$.subscribe(status => {
      if (status) {
        this.getCategory();
      }
    });
  }

  displayedColumns: string[] = ['name', 'value', 'operation'];

  ngOnInit() {
    this.getCategory();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryFormDialogComponent, {
      width: '250px',
      data: { title: '添加分类' }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }

  onDeleteClick(row: Category): void {
    const dialogRef = this.dialog.open(OperationWarnDialogComponent, {
      width: '250px',
      data: {
        message: `确定要删除 ${row.name} 吗？`
      }
    });

    dialogRef.afterClosed().subscribe(choose => {
      if (choose === 'yes') {
        this.categoryService.deleteCategory(row.name).subscribe(result => {
          this.getCategory();
          this.messageService.showSnackbar('success', '删除成功！');
        });
      }
    });
  }

  getCategory() {
    this.categoryService.category().subscribe(result => {
      this.dataSource = result.category;
      this.table.renderRows();
    });
  }
}
