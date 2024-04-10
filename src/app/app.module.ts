import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

/* App */
import {AppComponent} from './app.component';

/* Core */
import {CoreModule} from '@app/core/core.module';

/* Container */
import {ContainerModule} from '@app/container/container.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		ContainerModule,
		CoreModule,
  FontAwesomeModule,
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
