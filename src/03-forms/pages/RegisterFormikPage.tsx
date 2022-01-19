import { Formik } from 'formik';
import '../styles/styles.css'
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register formik page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={ values => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
                    .min(2, 'El nombre debe es de 3 caracterires a mas')
                    .required('El campo es requerido'),
            email: Yup.string()
                    .email('Revise el formato del correo')
                    .required('Requerido'),
            password1: Yup.string()
                        .min(6, 'Minimo 6 caracteres')
                        .required('Requerido'),
            password2: Yup.string()
                        .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales')
                        .required('Requerido'),
          })
        }
      >
        {
          ({handleReset}) => (
            <form noValidate>
              <MyTextInput 
                label='Name'
                name='name' />
              
              <MyTextInput 
                label='Email'
                name='email' />
              
              <MyTextInput 
                label="Password"
                name='password1'
                type='password' />

              <MyTextInput 
                label='Repeat Password'
                name='password2'
                type='password' />
              
              <button type="submit">Create</button>
              <button type="button" onClick={handleReset}>Reset Form</button>
            </form>
          )
        }
      </Formik>
    </div>
  )
}