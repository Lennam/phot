import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  message: string;
  onNoClick: object;
  onOkClick: object;
}

@Component({
  selector: 'app-operation-warn-dialog',
  templateUrl: './operation-warn-dialog.component.html',
  styleUrls: ['./operation-warn-dialog.component.sass']
})
export class OperationWarnDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OperationWarnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  onNoClick() {
    this.dialogRef.close();
  }
}
