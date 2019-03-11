import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

@Injectable()
export class MessageService {
  constructor(private snackBar: MatSnackBar) {}

  showSnackbar(type: string, message: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, '知道了！', {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: `${type}-snackbar`
    });
  }
}
