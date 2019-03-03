import { NgModule } from '@angular/core';

import { MatCheckboxModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule } from '@angular/material';

const materialModules = [
  MatCheckboxModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {
}
