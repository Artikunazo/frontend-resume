import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './components/container/container.component';

import { AboutmeModule } from '@aboutme/aboutme.module';
import { ContactModule } from '@contact/contact.module';
import { TechSkillsModule } from '@tech-skills/tech-skills.module'
import { ProjectsModule } from '@projects/projects.module';

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
