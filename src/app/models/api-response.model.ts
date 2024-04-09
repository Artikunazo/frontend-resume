import { IResume } from "./resume.model";

export interface IApiResponse {
    message: string;
    result: IResume;
}
