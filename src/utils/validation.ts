import * as yup from 'yup'
import { IWorkExperience, IWorkExperiences } from '../@types/types'

export const workExperience: yup.SchemaOf<IWorkExperience> = yup.object().shape({
    id: yup.string().optional(),
    jobTitle: yup.string().required("job title is required"),
    jobField: yup.string().required("job field is required"),
    jobLocation: yup.string().required("job location is required"),
    startDate: yup.date().required("start Date is required"),
    endDate: yup.date().when("currentlyWorkThere", {
      is: true,
      then: yup.date().optional(),
      otherwise: yup.date()
        .required("end date is required")
        .min(
          yup.ref("startDate"),
          "end date must be bigger than the start date"
        ),
    }),
    currentlyWorkThere: yup.bool().defined(),
    jobDescription: yup.string().required("job description is required"),
    companyName: yup.string().required("company name is required"),
    companyAddress: yup.string().required("company address is required"),
    companyIndustry: yup.string().required("company industry is required"),
    companySize: yup.string().required("company size is required"),
    companySector: yup.string().required("company sector is required"),
    supervisorName: yup.string().required("supervisor name is required"),
    numOfEmployeesSupervisedByYou: yup.string().required(
      "number of employees is required"
    ),
    reasonOfLeaving: yup.string().when("currentlyWorkThere", {
      is: true,
      then: yup.string().optional(),
      otherwise: yup.string().required("reason of leaving is required"),
    }),
    startSalay: yup.number().required("start salay is required").integer(),
    endSalay: yup.number().required("end salay is required").integer().min(yup.ref('startSalay'), 'End Salary must be higher than the start salary'),
    currency: yup.string().required("currency is required"),
})


export const workExperiences: yup.SchemaOf<IWorkExperiences> =  yup.object().shape({
    WorkExperiences: yup.array().of(workExperience).min(1, 'At least one work experience must be added')
})
