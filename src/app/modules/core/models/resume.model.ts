import { IBasicInfo } from '@header/basic-info/models/basic-info.model';
import { ISocialNetworks } from '@shared/models/social-networks.model';
import { ITechSkills } from '@modules/tech-skills/models/tech-skills.model';
import { IProject } from '@modules/projects/models/projects.model';

export interface IResume {
  aboutme: string;
  basicInfo: IBasicInfo[] | IBasicInfo;
  techSkills: ITechSkills[];
  socialNetworks: ISocialNetworks[];
  projects: IProject[];
}
