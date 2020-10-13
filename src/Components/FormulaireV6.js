import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl.js'
function FormulaireV6() {

    const checkboxOptions = [
        { key: 'HTML', value: 'HTML'},
        { key: 'CSS', value: 'CSS'},
        { key: 'Javascript', value: 'Javascript'}
    ]

    const dropdownOptions = [
        { key: 'Select your course', value: ''},
        { key: 'React', value: 'react'},
        { key: 'Angular', value: 'angular'},
        { key: 'Vue', value: 'vue'}
    ]
    const InitialValues = {
        adress: '',
        email: '',
        bio: '',
        course: '',
        skillset: [],
        courseDate: null
    }
    const validationSchema = Yup.object({
        adress: Yup.string().required("Required"),
        email: Yup.string().email('Invalid email Format').required("Required"),
        bio: Yup.string().required("Required"),
        course: Yup.string().required("Required"),
        skillset: Yup.array().required("Required"),
        courseDate: Yup.date().required("Required").nullable()
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
                formik => (

                <Form>

                    <FormikControl 
                        control="chakraInput" 
                        type="text" 
                        label="Adress" 
                        name="adress"
                    />

                    <FormikControl 
                        control="input" 
                        type="email" 
                        label="Email" 
                        name="email"
                    />
                    
                    <FormikControl 
                        control="textarea"     
                        label="Bio"     
                        name="bio"
                    />

                    <FormikControl 
                        control="select"     
                        label="Course"     
                        name="course"
                        options={dropdownOptions}
                    />

                    <FormikControl 
                        control="checkbox"     
                        label="Skillset"     
                        name="skillset"
                        options={checkboxOptions}
                    />

                    <FormikControl 
                        control="date"     
                        label="Course date"     
                        name="courseDate"
                    />

                    
                    <button type="submit" disabled={!formik.isValid}>Submit</button>
                </Form>
                )
            }
        </Formik>
    )
}

export default FormulaireV6
