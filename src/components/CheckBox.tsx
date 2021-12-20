import { Field } from 'formik'

const CheckBox = ({ name, placeholder, label, errors, touched }: any) => {
  return (
    <div>
      <Field type={'checkbox'} name={name} placeholder={placeholder}/>
      {label && <label htmlFor={name} className='px-2'>{label}</label>}
      {errors[name] && touched[name] && <div className={'error'}>{errors[name]}</div>}
    </div>
  )
}

export default CheckBox
