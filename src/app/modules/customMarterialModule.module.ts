import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule],
  exports: [MatInputModule, MatFormFieldModule, MatButtonModule]
})
export class CustomMaterialModule {}
