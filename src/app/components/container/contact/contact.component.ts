import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsHelper } from '@helpers/forms/forms.helper';
import { ResumeService } from '@services/resume/resume.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;

  private _subs = new Subscription();

  constructor(
    private _formsHelper: FormsHelper,
    private _resumeService: ResumeService
  ) {
    this.contactForm = this._formsHelper.createForm('contact');
  }

  ngOnInit(): void {
  }

  sendForm() {
    const contactInfo = { ...this.contactForm.value };

    this._subs.add(
      this._resumeService.sendContactForm(contactInfo)
      .subscribe((response) => {
        console.log(response.message);
      })
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

}
