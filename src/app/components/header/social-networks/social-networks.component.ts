import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ResumeService } from '@services/resume/resume.service';
import { ISocialNetworks } from '@models/social-networks';
import { IResume } from '@models/resume';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {
  iconsAvailable : any = {
    'linkedin': faLinkedin,
    'github': faGithub
  };

  iconStyles = {
    'color': '#8444df',
  }

  socialNetworks: ISocialNetworks[] = [];

  constructor(
    private _resumeService: ResumeService
  ) { }

  ngOnInit(): void {
    this._resumeService
    .getInfoByCategory('socialNetworks')
    .subscribe((socialNetworks: IResume[keyof IResume]) => {

      this.socialNetworks = (socialNetworks as ISocialNetworks[]);

      this.socialNetworks = this.socialNetworks.filter(item => {
        return Object.keys(this.iconsAvailable).includes(item.name.toLowerCase());
      });
      
    });
  }

  getIcon(nameIcon = ''){
    if(!nameIcon) throw new Error('Name icon missing!');

    return this.iconsAvailable[nameIcon.toLowerCase()] as IconProp;
  };

}
