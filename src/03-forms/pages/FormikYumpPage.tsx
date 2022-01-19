import React from 'react'
import {useFormik} from 'formik'
import * as Yump from 'yup'
import '../styles/styles.css'

export const FormikYumpPage = () => {

  const {handleSubmit, errors, touched, getFieldProps} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: Yump.object({
      firstName: Yump.string()
                  .max(15, 'Debe de terner 15 caracteres o menos')
                  .required('Requerido'),
      lastName: Yump.string()
                  .max(15, 'Debe de tener 15 caracteres o menos')
                  .required('Requerido'),
      email: Yump.string()
              .email('Email no tiene un formato valido')
              .required('Requerido'),
    })
  });

  return (
    <div>
      <h1>Formik Yump Tutorial</h1>
      <form noValidate onSubmit={handleSubmit} autoComplete='off'>
        <label htmlFor="firstName">First Name</label>
        <input  type="text" {...getFieldProps('firstName')} />
        {
          touched.firstName && errors.firstName && <span>{errors.firstName}</span>
        }
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps('lastName')} />
        {
          touched.lastName && errors.lastName && <span>{errors.lastName}</span>
        }
        <label htmlFor="email">E-mail address</label>
        <input type="text" {...getFieldProps('email')} />
        {
          touched.email && errors.email && <span>{errors.email}</span>
        }
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
