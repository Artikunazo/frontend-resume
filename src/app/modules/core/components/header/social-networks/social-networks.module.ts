import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialNetworksComponent } from './components/social-networks/social-networks.component';

@NgModule({
  declarations: [
    SocialNetworksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SocialNetworksComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SocialNetworksModule { }
