import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutmeComponent } from './components/aboutme/aboutme.component';


@NgModule({
  declarations: [
    AboutmeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutmeComponent
  ]
})
export class AboutmeModule { }
