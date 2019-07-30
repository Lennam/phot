import { FormDialogComponent } from './../../components/form-dialog/form-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

export interface PeriodicElement {
  name: string;
  value: number;
  weight: number;
  symbol: string;
}

const category: PeriodicElement[] = [
  { value: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { value: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { value: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { value: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { value: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { value: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { value: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { value: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { value: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { value: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent implements OnInit {
  name = '';
  value = '';
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['name', 'value'];
  dataSource = category;

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '250px',
      data: { title: '添加分类', name: this.name, value: this.value }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
      }
    });
  }
}
