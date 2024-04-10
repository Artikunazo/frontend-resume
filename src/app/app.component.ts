import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ResumeService} from '@app/api/resume.service';
import {environment} from '@environments/environment';

declare let gtag: Function;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(
		private _resumeService: ResumeService,
		private _meta: Meta,
		private _title: Title,
	) {
		this._resumeService.getResume();

		// Set Meta Tags
		this._meta.addTags([
			{name: 'author', content: 'Arturo Casas'},
			{name: 'description', content: 'Frontend Engineer'},
			{
				name: 'keywords',
				content:
					'web software engineer, frontend developer, angular Developer, javascript developer, frontend engineer, fullstack mean',
			},
		]);
		this._title.setTitle('Arturo Casas | Web Software Engineer');

		// GA
		const request = new XMLHttpRequest();
		gtag('Visit', environment.gaId, {
			data: request.getAllResponseHeaders(),
		});
	}
}
