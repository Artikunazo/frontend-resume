import { Component, OnInit, OnDestroy} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormsHelper } from '@contact/helpers/forms.helper';
import { ResumeService } from '@core/services/resume/resume.service';
import { Subscription } from 'rxjs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  public contactForm: UntypedFormGroup;
  public loading = false;

  private _subs = new Subscription();

  constructor(
    private _formsHelper: FormsHelper,
    private _resumeService: ResumeService
  ) {
    this.contactForm = this._formsHelper.createForm('contact');
  }

  get nameControl() {
    return this.contactForm.get('name');
  }

  get emailControl() {
    return this.contactForm.get('email');
  }

  get subjectControl() {
    return this.contactForm.get('subject');
  }

  get messageControl() {
    return this.contactForm.get('message');
  }



  ngOnInit(): void {
  }

  sendForm() {
    this.loading = true;
    const contactInfo = { ...this.contactForm.value };

    this._subs.add(
      this._resumeService.sendContactForm(contactInfo)
      .subscribe({
        next: (response) => {

          Notify.success(response.message);

          this.contactForm.reset();
          this.loading = false;
        },
        error: (error) => {
          Notify.failure(error.statusText);
          console.log(error);
          this.loading = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

}
