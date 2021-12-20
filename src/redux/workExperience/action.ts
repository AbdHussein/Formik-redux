import { AddWorkExperienceAction, DeleteWorkExperienceAction, EditWorkExperienceAction, IWorkExperience } from "../../@types/types";
import { WorkExperienceConstants } from "./constants";

export const AddWorkExperience = (workExperince: IWorkExperience): AddWorkExperienceAction => {
    return{
        type: WorkExperienceConstants.ADD_WORK_EXPERIENCE,
        payload: workExperince
    }
}

export const editWorkExperience = (workExperince: IWorkExperience): EditWorkExperienceAction => {
    return{
        type: WorkExperienceConstants.EDIT_WORK_EXPERIENCE,
        payload: workExperince
    }
}

export const deleteWorkExperience = (id: string): DeleteWorkExperienceAction => {
    return{
        type: WorkExperienceConstants.DELETE_WORK_EXPERIENCE,
        payload: id
    }
}