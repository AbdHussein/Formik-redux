import { WorkExperienceConstants } from "../redux/workExperience/constants";

export interface IWorkExperience{
    id?: string;
    jobTitle: string;
    jobField: string;
    jobLocation: string;
    startDate:Date | string;
    endDate?: Date | string;
    currentlyWorkThere: boolean;
    jobDescription: string;
    companyName:string;
    companyAddress:string;
    companyIndustry:string;
    companySize:string;
    companySector:string;
    supervisorName:string;
    numOfEmployeesSupervisedByYou:number | string;
    reasonOfLeaving?:string;
    startSalay:number | string;
    endSalay:number | string;
    currency:string;
}

export interface IWorkExperiences{
    WorkExperiences: IWorkExperience[];
}

export interface AddWorkExperienceAction {
    type: WorkExperienceConstants.ADD_WORK_EXPERIENCE;
    payload: IWorkExperience;
}

export interface EditWorkExperienceAction {
    type: WorkExperienceConstants.EDIT_WORK_EXPERIENCE;
    payload: IWorkExperience;
}

export interface DeleteWorkExperienceAction {
    type: WorkExperienceConstants.DELETE_WORK_EXPERIENCE;
    payload: string;
}

export type ActionsTypes = AddWorkExperienceAction | EditWorkExperienceAction | DeleteWorkExperienceAction;