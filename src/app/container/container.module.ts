import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container.component';

import { AboutmeModule } from '@app/aboutme/aboutme.module';
import { ContactModule } from '@app/contact/contact.module';
import { TechSkillsModule } from '@app/tech-skills/tech-skills.module'
import { ProjectsModule } from '@app/projects/projects.module';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    AboutmeModule,
    ContactModule,
    TechSkillsModule,
    ProjectsModule
  ],
  exports: [
    ContainerComponent
  ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
   ]
})
export class ContainerModule { }
