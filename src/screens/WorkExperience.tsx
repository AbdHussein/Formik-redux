import { v4 } from 'uuid'
import { Form, Formik, FormikHelpers, FormikState } from 'formik'
import { workExperience, workExperiences } from '../utils/validation'
import { ActionsTypes, IWorkExperience } from '../@types/types'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../redux/store'
import { Dispatch } from 'redux'
import { AddWorkExperience } from '../redux/workExperience/action'
import { SelectField } from '../components/SelectInput'
import { companyIndustries, companySector, companySize, currency, jobFields, jobLocations, jobTitles } from '../utils/constants'
import Input from '../components/Input'
import CheckBox from '../components/CheckBox'

const WorkExperience = () => {
  const state = useSelector((state: AppState) => state)
  const dispatch: Dispatch<ActionsTypes> = useDispatch()

  // TODO: Implement Edit functionality.

  const handleSubmit = (values_: IWorkExperience, { resetForm }: FormikHelpers<IWorkExperience>): void => {
    dispatch(
      AddWorkExperience({
        ...values_,
        id: v4(),
      })
    )
    // FIXME: Reset This form.
    resetForm({
      jobTitle: '',
      jobField: '',
      jobLocation: '',
      startDate: '',
      endDate: '',
      currentlyWorkThere: false,
      jobDescription: '',
      companyName: '',
      companyAddress: '',
      companyIndustry: '',
      companySize: '',
      companySector: '',
      supervisorName: '',
      numOfEmployeesSupervisedByYou: '',
      reasonOfLeaving: '',
      startSalay: '',
      endSalay: '',
      currency: '',
    } as Partial<FormikState<IWorkExperience>>)
  }

  return (
    <div className="m-auto" style={{ margin: 'auto', maxWidth: '50%' }}>
      <h2 className="text-center mb-2">Work Experiences</h2>
          <Formik
            initialValues={{
              jobTitle: '',
              jobField: '',
              jobLocation: '',
              startDate: '',
              endDate: '',
              currentlyWorkThere: false,
              jobDescription: '',
              companyName: '',
              companyAddress: '',
              companyIndustry: '',
              companySize: '',
              companySector: '',
              supervisorName: '',
              numOfEmployeesSupervisedByYou: '',
              reasonOfLeaving: '',
              startSalay: '',
              endSalay: '',
              currency: '',
            }}
            validationSchema={workExperience}
            onSubmit={(values_: IWorkExperience, FormikHelpers) => {
              handleSubmit(values_, FormikHelpers)
            }}
          >
            {({ values, touched, errors }) => (
              <Form style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {state.WorkExperiences.WorkExperiences.map(
                    (item: IWorkExperience, index: number): JSX.Element => (
                      <div className="d-flex card rounded" style={{justifyContent:'start'}} key={index}>
                        <span>{item.jobTitle} @</span>
                        <span>{item.companyName}</span>
                      </div>
                    )
                  )}
                <h3>Job Details</h3>
                <SelectField name={'jobTitle'} options={jobTitles} placeholder={'Job Title'} />
                <SelectField name={'jobField'} options={jobFields} placeholder={'Job Field'} />
                <SelectField name={'jobLocation'} options={jobLocations} placeholder={'Job Location'} />
                <div className="d-flex flex-direction-row justify-content-center gap-5">
                  <Input name={'startDate'} type={!touched?.startDate ? 'text' : 'date'} placeholder={'Start Date'} />
                  {!values?.currentlyWorkThere && <Input name="endDate" type={!touched?.endDate ? 'text' : 'date'} placeholder="End Date" disabled={values?.currentlyWorkThere} />}
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'start', gap:'5px'}}>
                  <CheckBox name={'currentlyWorkThere'} label={'currently work there ?'} {...{errors, touched}}/>
                </div>
                <div className='d-flex flex-direction-row justify-content-center gap-5 w-auto'>
                  <Input name='jobDescription' type='textarea' placeholder='Job Description'/>
                </div>
                <h3>Company Details</h3>
                <div className='d-flex justify-content-center gap-3 w-auto' style={{flexDirection:'column'}}>
                  <Input name='companyName' placeholder='Company Name'/>
                  <Input name='companyAddress' placeholder='Company Address'/>
                  <SelectField name={'companyIndustry'} options={companyIndustries} placeholder={'Company Industry'} />
                  <SelectField name={'companySize'} options={companySize} placeholder={'Company Size'} />
                  <SelectField name={'companySector'} options={companySector} placeholder={'Company Sector'} />
                  <Input name='supervisorName' placeholder='Supervisor Name'/>
                  <Input name='numOfEmployeesSupervisedByYou' type='number' placeholder='# Of Employees Supervised By You'/>
                  {
                    !values?.currentlyWorkThere &&
                    <Input name='reasonOfLeaving' placeholder='Reason Of Leaving' />
                  }
                </div>
                <h3>Compensation</h3>
                <div className='d-flex flex-direction-row justify-content-center gap-2 w-auto'>
                  <Input name='startSalay' placeholder='Start Salay' type='number'/>
                  <Input name='endSalay' placeholder='End Salay' type='number'/>
                  <SelectField name={'currency'} options={currency} placeholder={'Currency'} />
                </div>
                <button style={{ maxWidth: '40%', border: 'none', cursor: 'pointer' }} type="submit">
                  + SAVE & ADD ANOTHER RECORD
                </button>
              </Form>
            )}
          </Formik>
      
    </div>
  )
}

export default WorkExperience
