import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IResume } from '@models/resume';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApiResponse } from '@models/api-response';
import { ITechSkills } from '@models/tech-skills';
import { IContact } from '@models/contact';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private resumeApi = 'https://artikunazo-resume.herokuapp.com/v1/resume/';
  private resume$: Subject<IResume> = new Subject();

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
    return this._httpClient.post(this.resumeApi + 'contact', data);
  }
}
