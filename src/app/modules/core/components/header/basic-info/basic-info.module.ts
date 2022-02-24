import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInfoComponent } from './components/basic-info/basic-info.component';

@NgModule({
  declarations: [
    BasicInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasicInfoComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class BasicInfoModule { }
