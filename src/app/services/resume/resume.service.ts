import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IResume } from '@models/resume';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApiResponse } from '@app/models/api-response';
import { ITechSkills } from '@app/models/tech-skills';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private resumeApi = 'https://artikunazo-resume.herokuapp.com/v1/resume/all';
  private resume$: Subject<IResume> = new Subject();

  constructor(
    private _httpClient: HttpClient
  ) {}

  getResume() : void {
    this._httpClient.get<IApiResponse>(this.resumeApi)
    .pipe(
      map(
        (resume: IApiResponse) => resume.result
      )
    )
    .subscribe((resume) => {
      this.resume$.next(resume);
      this.resume$.complete();
    });
  }

  getInfoByCategory(categoryName: keyof IResume) : Observable<any> {

    if(!categoryName) throw new Error('Name category is required');

    return this.resume$.pipe(
      map(
        (resume: IResume) => {
          if(categoryName === 'techSkills'){
            return resume[categoryName].flatMap(
              (techSkill : ITechSkills) => {
                if(techSkill.frameworks) return techSkill.frameworks;
                return techSkill.name;
              }
            );
          }

          return resume[categoryName];
        }
      )
    );
  }
}
