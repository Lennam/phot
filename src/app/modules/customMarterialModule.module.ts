import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class CustomMaterialModule {}
