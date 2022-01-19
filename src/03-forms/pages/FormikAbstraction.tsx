import '../styles/styles.css'
import {Form, Formik} from 'formik'
import * as Yump from 'yup'
import { MyTextInput, MySelect, MyCheckbox } from '../components'

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction Tutorial</h1>

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
              <MyTextInput 
                label='First Name' 
                name='firstName'
                placeholder='Renatto' />

              <MyTextInput
                label='Last Name'
                name='lastName'
                placeholder='Neciosup' />

              <MyTextInput
                label='Email Address'
                name='email'
                type='email'
                placeholder='tu@correo.com' />

              <MySelect label='Job Type' name="jobType" >
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">It Senior</option>
                <option value="it-jr">It Junior</option>
              </MySelect>

              <MyCheckbox label='Terms and conditions' name='terms' />

              <button type="submit">Enviar</button>
            </Form>
          )
        }
      </Formik>

    </div>
  )
}
