import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITechSkills } from '@app/models/tech-skills';
import { ResumeService } from '@services/resume/resume.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent implements OnInit, OnDestroy {
  
  skills: ITechSkills[] = [];

  private _subs = new Subscription();

  constructor(
    private _resumeService: ResumeService
  ) { }

  ngOnInit(): void {
    this._subs.add(
      this._resumeService
      .getInfoByCategory('techSkills')
      .subscribe((skills) => {
        this.skills = (skills as ITechSkills[]);
      })
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

}
