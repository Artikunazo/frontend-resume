import { IBasicInfo } from './basic-info';
import { IEducation } from './education';
import { IExperience } from './experience';
import { ISocialNetworks } from './social-networks';
import { ITechSkills } from './tech-skills';

export interface IResume {
  aboutme: string;
  basicInfo: IBasicInfo[] | IBasicInfo;
  techSkills: ITechSkills[];
  education: IEducation[];
  experience: IExperience[];
  socialNetworks: ISocialNetworks[];

}
