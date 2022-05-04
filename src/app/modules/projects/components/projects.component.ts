import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ResumeService } from '@core/services/resume/resume.service';
import { Subscription } from 'rxjs';
import { IProject } from '../models/projects.model';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public projects: IProject[] = [];
  private _subs = new Subscription();
  constructor(private _resumeService: ResumeService) {}

  ngOnInit(): void {
    this._subs.add(
      this._resumeService
        .getInfoByCategory('projects')
        .subscribe((projects: IProject[]) => {
          this.projects = projects;
        })
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
