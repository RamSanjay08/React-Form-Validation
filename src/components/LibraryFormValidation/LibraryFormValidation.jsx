import React from 'react'
import { useForm } from "react-hook-form"
import FormStyles from '../CSS/Form.module.css'

function LibraryFormValidation() {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = (data) => console.log(data)
  // console.log(register());
  // console.log(handleSubmit());
  // console.log(errors);

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={FormStyles.inputDiv}>
          <input type="text" placeholder='Full Name'/>
          <small></small>
        </div>
        <div className={FormStyles.inputDiv}>
          <input type="tel" placeholder='Mobile Number'/>
          <small></small>
        </div>
        <div className={FormStyles.inputDiv}>
          <input type="text" placeholder='Email'/>
          <small></small>
        </div>
        <div className={FormStyles.inputDiv}>
          <input type="password" placeholder='Password'/>
          <small></small>
        </div>
        <div className={FormStyles.inputDiv}>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default LibraryFormValidation