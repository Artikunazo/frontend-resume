import { Component } from '@angular/core';
import { ResumeService } from '@services/resume/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _resumeService: ResumeService
  ) {
    this._resumeService.getResume();
  }
}
