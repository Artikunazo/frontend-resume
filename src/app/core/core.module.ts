import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component'
import { FooterComponent } from './footer.component'
import { BasicInfoComponent } from "./basic-info.component";
import { SharedModule } from "../shared/shared.module";

import { ResumeService } from '../api/resume.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent,BasicInfoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent, FooterComponent,BasicInfoComponent,
    SharedModule
  ],
  providers: [
    ResumeService
  ]
})
export class CoreModule { }
