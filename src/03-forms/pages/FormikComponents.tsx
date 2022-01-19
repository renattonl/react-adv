import React from 'react'
import {Field, Form, ErrorMessage, Formik} from 'formik'
import * as Yump from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components Tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={
          Yump.object({
            firstName: Yump.string()
                        .max(15, 'Debe de terner 15 caracteres o menos')
                        .required('Requerido'),
            lastName: Yump.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
            email: Yump.string()
                    .email('Email no tiene un formato valido')
                    .required('Requerido'),
            terms: Yump.boolean()
                      .oneOf([true], 'Debe de aceptar las condiciones'),
            jobType: Yump.string()
                      .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                      .required('Requerido'),
          })
        }
      >
        {
          formik => (
            <Form noValidate autoComplete='off'>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName"  type="text" />
              <ErrorMessage name="firstName" component="span" />

              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name='lastName' component="span" />

              <label htmlFor="email">E-mail address</label>
              <Field name="email" type="text" />
              <ErrorMessage name='email' component="span" />

              <label htmlFor="jobType">Job type</label>
              <Field name="jobType" as="select" >
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">It Senior</option>
                <option value="it-jr">It Junior</option>
              </Field>
              <ErrorMessage name='jobType' component="span" />

              <label>
                <Field name="terms" type="checkbox" />
                Terms and conditions
              </label>
              <ErrorMessage name='terms' component="span" />

              <button type="submit">Enviar</button>
            </Form>
          )
        }
      </Formik>

    </div>
  )
}
