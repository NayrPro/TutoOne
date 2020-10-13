import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl.js'


function FormulaireV4() {
    const InitialValues = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object({
        email: Yup.string().required("Required"),
        password: Yup.string().required("Required")
    })

    const onSubmit = values =>{
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)));
   }


    return (
        <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {
                formik => { 
                    return <Form>
                        <FormikControl 
                            control="input" 
                            type="email" 
                            label="Email" 
                            name="email"
                        />
                        <FormikControl 
                            control="input" 
                            type="password" 
                            label="Password" 
                            name="password"
                        />
                        
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default FormulaireV4
