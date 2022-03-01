import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IResume } from '@core/models/resume.model';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApiResponse } from '@core/models/api-response.model';
import { ITechSkills } from '@modules/tech-skills/models/tech-skills.model';
import { IContact } from '@modules/contact/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private resumeApi = 'https://nth-suprstate-329822.uc.r.appspot.com/v1/resume/';
  private resume$: Subject<IResume> = new Subject();
  private options = {
    headers: {'Content-Type': 'application/json'}
  };

  constructor(
    private _httpClient: HttpClient
  ) {}

  getResume() : void {
    this._httpClient.get<IApiResponse>(this.resumeApi + 'all')
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

  sendContactForm(data: IContact) : Observable<any> {
    return this._httpClient.post(
      this.resumeApi + 'contact', JSON.stringify(data), this.options);
  }
}
