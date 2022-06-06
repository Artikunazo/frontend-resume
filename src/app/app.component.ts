import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ResumeService } from '@core/services/resume/resume.service';

declare let gtag: Function;

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
      { name: 'description', content: 'Web Software Engineer' },
      {
        name: 'keywords',
        content: 'Web Software Engineer, Frontend Developer, Angular Developer, Javascript Developer',
      },
    ]);
    this._title.setTitle('Arturo Casas | Web Software Engineer');

    // GA
    let request = new XMLHttpRequest();
    gtag('Conversion', request.getAllResponseHeaders());
  }
}
