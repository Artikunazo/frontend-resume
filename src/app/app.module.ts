import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
/* Header */
import { HeaderComponent } from '@components/header/header/header.component';
import { BasicInfoComponent } from '@components/header/basic-info/basic-info.component';
import { 
  SocialNetworksComponent 
} from '@components/header/social-networks/social-networks.component';
import { AppMenuComponent } from '@header/app-menu/app-menu.component';

/* Container */
import { AboutmeComponent } from '@container/aboutme/aboutme.component';
import { ContactComponent } from '@container/contact/contact.component';
import { ContainerComponent } from '@container/container/container.component';
import { TechSkillsComponent } from '@container/tech-skills/tech-skills.component';
import { ProjectsComponent } from '@container/projects/projects.component';

/* Footer */
import { FooterComponent } from '@footer/footer.component';

/* Services */
import { ResumeService } from '@services/resume/resume.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicInfoComponent,
    SocialNetworksComponent,
    AboutmeComponent,
    ContactComponent,
    ContainerComponent,
    TechSkillsComponent,
    ProjectsComponent,
    FooterComponent,
    AppMenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
