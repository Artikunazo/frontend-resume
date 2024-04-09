import { IBasicInfo } from '@app/models/basic-info.model';
import { ISocialNetworks } from '@app/models/social-networks.model';
import { ITechSkills } from '@app/models/tech-skills.model';
import { IProject } from '@app/models/projects.model';

export interface IResume {
  aboutme: string;
  basicInfo: IBasicInfo[] | IBasicInfo;
  techSkills: ITechSkills[];
  socialNetworks: ISocialNetworks[];
  projects: IProject[];
}
