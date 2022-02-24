import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechSkillsComponent } from './components/tech-skills/tech-skills.component';

@NgModule({
  declarations: [
    TechSkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TechSkillsComponent
  ]
})
export class TechSkillsModule { }
