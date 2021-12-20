import { Field, FieldProps } from 'formik'
import React from 'react'
import Select, { SingleValue, PropsValue } from 'react-select'

export type Option = {
  label: string
  value: string
}

export const SelectField: React.FC<PropsValue<Option> & any> = ({ options, name, placeholder }): JSX.Element => (
  <Field name={name}>
    {({
      field /* { name, value, onChange, onBlur } */,
      form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      meta,
    }: FieldProps) => (
      <div className='w-100'>
        <Select<Option> 
          options={options} 
          placeholder={placeholder} 
          getOptionLabel={(option: Option) => option.label} 
          getOptionValue={(option: Option) => option.value} 
          name={name} 
          value={options ? options.find((option: Option) => option.value === field.value) : null} 
          onChange={(option: SingleValue<Option>) => {
            form.setFieldValue(name, option?.value)
          }} 
          onBlur={field.onBlur} 
        />
        {meta.touched && meta.error && <div style={{ color: 'red' }}>{meta.error}</div>}
      </div>
    )}
  </Field>
)
