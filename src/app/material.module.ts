import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatInputModule } from '@angular/material';

const materialModules = [
  MatCheckboxModule,
  MatInputModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {
}
