import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumeService } from '@core/services/resume/resume.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent implements OnInit, OnDestroy {

  skills: string[] = [];

  private _subs = new Subscription();

  constructor(
    private _resumeService: ResumeService
  ) { }

  ngOnInit(): void {
    this._subs.add(
      this._resumeService
      .getInfoByCategory('techSkills')
      .subscribe((skills) => {
        this.skills = skills;
      })
    );
  }

  findIconSkill(skill: string): string {
    skill = skill.toLowerCase();

    if (skill.includes('api rest')) {
      return '/assets/images/icons/' + 
        skill.replace(' ', '-') + 
        '-icon.svg';
    }

    if(skill.includes('gary-css')){
      return '/assets/images/icons/open-source-icon.svg';
    }

    let icon = '/assets/images/icons/' + skill + '-icon.svg';

    if(!icon){
      icon = '/assets/images/icons/default.svg';
    }

    return icon;
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

}
