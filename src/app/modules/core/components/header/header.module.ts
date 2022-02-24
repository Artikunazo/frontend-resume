import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BasicInfoModule } from './basic-info/basic-info.module';
import { SocialNetworksModule } from './social-networks/social-networks.module';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SocialNetworksModule,
    BasicInfoModule
  ],
  exports: [
    HeaderComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class HeaderModule { }
