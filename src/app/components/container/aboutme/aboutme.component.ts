import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumeService } from '@services/resume/resume.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit, OnDestroy {
  aboutme = '';

  private _subs = new Subscription();

  constructor(
    private _resumeService: ResumeService
  ) { }

  ngOnInit(): void {
   this._subs.add(
    this._resumeService.getInfoByCategory('aboutme')
    .subscribe((aboutme) => {
      this.aboutme = (aboutme as string);
    })
   );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

}
