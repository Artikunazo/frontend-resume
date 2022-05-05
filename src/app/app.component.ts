import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ResumeService } from '@core/services/resume/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private _resumeService: ResumeService,
    private _meta: Meta,
    private _title: Title
  ) {
    this._resumeService.getResume();

    // Set Meta Tags
    this._meta.addTags([
      { name: 'author', content: 'Arturo Casas' },
      { name: 'description', content: 'Software Engineer' },
      {
        name: 'keywords',
        content: 'Software Engineer, Frontend Developer, Angular Developer',
      },
    ]);
    this._title.setTitle('Arturo Casas | Software Engineer');
  }
}
