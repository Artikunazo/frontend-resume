import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/* App */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/* Core */
import { CoreModule } from '@core/core.module'

/* Container */
import { AboutmeModule } from '@modules/aboutme/aboutme.module';
import { ContactModule } from '@modules/contact/contact.module';
import { ContainerModule } from '@modules/container/container.module';
import { TechSkillsModule } from '@modules/tech-skills/tech-skills.module';
import { ProjectsModule } from '@modules/projects/projects.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutmeModule,
    ContactModule,
    ContainerModule,
    TechSkillsModule,
    ProjectsModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
