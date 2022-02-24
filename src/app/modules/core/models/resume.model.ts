import { IBasicInfo } from '@header/basic-info/models/basic-info.model';
import { ISocialNetworks } from '@header/social-networks/models/social-networks.model';
import { ITechSkills } from '@modules/tech-skills/models/tech-skills.model';

export interface IResume {
  aboutme: string;
  basicInfo: IBasicInfo[] | IBasicInfo;
  techSkills: ITechSkills[];
  socialNetworks: ISocialNetworks[];

}
