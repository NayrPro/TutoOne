import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl.js'
function FormulaireV5() {

    const modeOfContacts = [
        { key: 'Email', value: 'email'},
        { key: 'Telephone', value: 'telephone'}
    ]

    const InitialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phoneNumber: '',
    }
    
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required("Required"),
        modeOfContact: Yup.string().required("Required"),
        phoneNumber: Yup.string().when('modeOfContact', {
            is: 'telephone',
            then: Yup.string().required('Required')
        })
    })
    const onSubmit = values =>{
         console.log('Form data', values)
    }
    
    return (
        <Formik initialValues={InitialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                formik => (
                <Form>
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

                    <FormikControl 
                        control="input" 
                        type="password" 
                        label="Confirm password" 
                        name="confirmPassword"
                    />

                    <FormikControl 
                        control="radio"     
                        label="Mode of contact"     
                        name="modeOfContact"
                        options={modeOfContacts}
                    />

                    <FormikControl 
                        control="input"
                        type="text"  
                        label="Phone number" 
                        name="phoneNumber"
                    />
                    
                    <button type="submit" disabled={!formik.isValid}>Submit</button>
                </Form>
                )
            }
        </Formik>
    )
}

export default FormulaireV5
