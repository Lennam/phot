import { MessageService } from './../../service/message.service';
import { ArticalService } from './../../service/artical.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createDeflate } from 'zlib';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { OperationWarnDialogComponent } from 'src/app/components/operation-warn-dialog/operation-warn-dialog.component';
import { MatTableDataSource, MatTable } from '@angular/material';

export interface Artical {
  id: string;
  title: string;
  createDeflate: string;
  category: [];
}

@Component({
  selector: 'app-manage-article',
  templateUrl: './manage-article.component.html',
  styleUrls: ['./manage-article.component.scss']
})
export class ManageArticleComponent implements OnInit {
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  displayedColumns: string[] = [
    'select',
    'title',
    'createDate',
    'category',
    'operation'
  ];
  dataSource: [] = [];

  beginDate = new FormControl();
  endDate = new FormControl();
  serializedDate = new FormControl(new Date().toISOString());
  selection = new SelectionModel<Artical>(true, []);

  constructor(
    private articalService: ArticalService,
    public dialog: MatDialog,
    public messageService: MessageService
  ) {}

  ngOnInit() {
    this.getArticals();
  }

  getArticals() {
    this.articalService.getArticals(1).subscribe(result => {
      this.dataSource = result.data.articals.list;
      this.table.renderRows();
      // this.dataSource.data = new MatTableDataSource<Artical>(
      //   result.data.articals.list
      // );
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Artical): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.title
    }`;
  }

  onDeleteClick(row: Artical) {
    const dialogRef = this.dialog.open(OperationWarnDialogComponent, {
      width: '250px',
      data: {
        message: `确定要删除 ${row.title} 吗？`
      }
    });

    dialogRef.afterClosed().subscribe(choose => {
      if (choose === 'yes') {
        this.articalService.deleteArtical(row.id).subscribe(data => {
          if (data.data.deleteArtical.success) {
            this.getArticals();
            this.messageService.showSnackbar('success', '删除成功！');
          } else if (data.data.errors) {
            this.messageService.showSnackbar('error', '删除失败！');
          }
        });
      }
    });
  }
}
