import React, { FormEvent } from 'react'
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

export const RegisterPage = () => {

  const {formData, onChange, resetForm, isValidEmail, name, email, password1, password2} = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData)
  }
  return (
    <div>
      <h1>Register page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Name"
          value={name}
          name="name"
          onChange={onChange}
          className={ `${!name.trim().length && 'has-error'}` } />
        {
          !name.trim().length && <span>Este campo es necesario</span>
        }
        <input 
          type="email" 
          placeholder="Email"
          value={email}
          name="email"
          onChange={onChange}
          className={ `${!isValidEmail(email.trim()) && 'has-error'}` }/>
        {
          !isValidEmail(email.trim()) && <span>El email no es valido</span>
        }
        <input 
          type="password" 
          placeholder="Password"
          value={password1}
          name="password1"
          onChange={onChange} />
        <input 
          type="password" 
          placeholder="Repeat Password"
          value={password2}
          name="password2"
          onChange={onChange} />
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Reset Form</button>
      </form>
      <code>
        {JSON.stringify(formData, null, 5)}
      </code>
    </div>
  )
}