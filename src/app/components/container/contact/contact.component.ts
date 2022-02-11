import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsHelper } from '@helpers/forms/forms.helper';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private _formsHelper: FormsHelper
  ) { 
    this.contactForm = this._formsHelper.createForm('contact');
  }

  ngOnInit(): void {
  }

  sendForm() {
    console.log("Form sent!", this.contactForm);
  }

}
