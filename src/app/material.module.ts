import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

const materialModules = [
  MatCheckboxModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {
}
