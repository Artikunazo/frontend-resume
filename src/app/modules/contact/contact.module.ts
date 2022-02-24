import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
