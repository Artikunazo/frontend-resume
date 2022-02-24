import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '@header/header.module'
import { FooterModule } from '@footer/footer.module'

import { ResumeService } from './services/resume/resume.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    HeaderModule,
    FooterModule
  ],
  providers: [
    ResumeService
  ]
})
export class CoreModule { }
