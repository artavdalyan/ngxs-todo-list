import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule } from '@angular/material';

const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {
}
