import { ActionsTypes, IWorkExperience, IWorkExperiences } from "../../@types/types";
import { WorkExperienceConstants } from "./constants";

const initialState: IWorkExperiences = {
    WorkExperiences: [],
  }

export const WorkExperiencesReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type){
        case WorkExperienceConstants.ADD_WORK_EXPERIENCE: {
            return {
                ...state,
                WorkExperiences: [...state.WorkExperiences, action.payload]
            }
        }

        case WorkExperienceConstants.EDIT_WORK_EXPERIENCE: {
            if(action.payload.id){
                const index: number = state.WorkExperiences.findIndex((WE: IWorkExperience) => WE.id === action.payload.id)
                if(index !== -1){
                    const newWorkExperiences = [...state.WorkExperiences];
                    newWorkExperiences[index] = action.payload;
                    return {
                        ...state,
                        // WorkExperiences: [...newWorkExperiences]
                        WorkExperiences: state.WorkExperiences.map((WE: IWorkExperience) => {
                            if(WE.id === action.payload.id){
                                WE = action.payload
                            }
                            return WE
                        })
                    }
                }
            }
            return state
        }

        case WorkExperienceConstants.DELETE_WORK_EXPERIENCE: {
            return {
                ...state,
                WorkExperiences: state.WorkExperiences.filter((WE: IWorkExperience) => WE.id !== action.payload)
            }
        }

        default:
            return state
    }
}