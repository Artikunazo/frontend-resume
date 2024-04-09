import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IResume } from '@app/models/resume.model';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApiResponse } from '@app/models/api-response.model';
import { ITechSkills } from '@app/models/tech-skills.model';
import { IContact } from '@app/models/contact.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private resumeApi = `${environment.api_url}`;
  private contactApi = environment.contact_api;
  private resume$: Subject<IResume> = new Subject();
  private options = {
    headers: {'Content-Type': 'application/json'}
  };

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

  sendContactForm(data: IContact) : Observable<any> {
    return this._httpClient.post(
      this.contactApi, JSON.stringify(data), this.options);
  }
}
