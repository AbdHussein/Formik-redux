import { Field, FieldProps } from 'formik'
import React, {useState } from 'react'

const Input: React.FC<any> = ({ name, type, ...props }) => {
    const [focus, setFocus] = useState(false);

  return (
    <Field name={name}>
      {({
        field /* { name, value, onChange, onBlur } */,
        form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }: FieldProps) => (
        <div style={{width:'100%', textAlign:'center'}}>
          {type === 'textarea' ? (
            <textarea
              className='w-100'
              name={name}
              onFocus={()=>{
                setFocus(true)
                form.getFieldHelpers(name).setTouched(true)
              }}
              onChange={(e) => {
                form.setFieldValue(name, e.target.value)
              }}
              onBlur={(e)=>{
                setFocus(false)
                field.onBlur(e)
              }}
              value={field.value}
              {...props}
            >
            </textarea>
          ) : (
            <input
              className='w-100'
              name={name}
              type={type}
              
              onFocus={()=>{
                setFocus(true)
                form.getFieldHelpers(name).setTouched(true)
              }}
              onChange={(e) => {
                form.setFieldValue(name, e.target.value)
              }}
              onBlur={(e)=>{
                setFocus(false)
                field.onBlur(e)
              }}
              value={field.value}
              {...props}
            />
          )}
          {meta.touched && meta.error && <div style={{ color: 'red' }}>{meta.error}</div>}
        </div>
      )}
    </Field>
  )
}

export default Input
