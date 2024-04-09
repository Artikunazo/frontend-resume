import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBasicInfo } from '@app/models/basic-info.model';
import { ResumeService } from '@app/api/resume.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit, OnDestroy {
  smallBio: IBasicInfo = { name: '' };

  private _subs = new Subscription();

  constructor(
    private _resumeService: ResumeService
  ) { }

  ngOnInit(): void {
    this._subs.add(
      this._resumeService.getInfoByCategory('basicInfo')
      .subscribe(
        (response: IBasicInfo) => {
          this.smallBio = response;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

}
