import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';

export const DynamicForm = () => {
  
  const requiredFields: {[x: string]: any} = {}
  const initialValues: {[x: string]: any} = {}
  // 
  for (const input of formJson) {
    initialValues[input.name] = input.value;
    if(!input.validations) continue;
    let schema = Yup.string();
    for (const rule of input.validations) {
      if(rule.type === 'required') {
        schema = schema.required(rule.message)
      }
      if(rule.type === "minLength") {
        schema = schema.min((rule as any).value ?? 1, rule.message)
      }
      if(rule.type === "email") {
        schema = schema.email(rule.message)
      }
    }
    requiredFields[input.name] = schema
  }

  const validationShcema = Yup.object({...requiredFields})

  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={ (values) => {
          console.log(values);
        }}
        validationSchema={validationShcema}
      >
        {
          (formik) => (
            <Form noValidate>
              {
                formJson.map( ({type, label, name, placeholder, options = []}) => {
                  if(type === 'select'){
                    return <MySelect 
                      label={label}
                      name={name}>
                        <option value="">Seleccione</option>
                        {
                          options?.map(({id, label}) => (
                            <option value={id}>{label}</option>
                          ))
                        }
                      </MySelect>
                  }
                  return <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    type={(type as any)}
                    placeholder={placeholder}
                  />
                })
              }
              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
