import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray , FastField} from "formik"
import TextError from '../TextError';
import * as yup from 'yup'

const initialValues = {
    nom: "Zane",
    prenom: "",
    eMail: "",
    motDePasse: "",
    comments: "",
    address: "",
    social: {
        twitter: "",
        facebook: ""
    },
    phoneNumbers: ["",""],
    phNumbers: ['']
}

const savedValues = {
    nom: "Zane",
    prenom: "Cyzar",
    eMail: "abc@de.fr",
    motDePasse: "bomboclaat",
    comments: "asd",
    address: "10 rue des Ténèbres",
    social: {
        twitter: "@ZaneC",
        facebook: "Zane Cyrus"
    },
    phoneNumbers: ["8888888","99999999"],
    phNumbers: ['55555555']
}

const onSubmit = (values, onSubmitProps) => { 
    console.log("Values Submit : ", values) 
    console.log("Submit prop", onSubmitProps);
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}
const validationSchema = yup.object(
    {
        
        nom : yup.string().required("Required"),
        prenom : yup.string().required("Required"),
        eMail : yup.string().required("Required"),
        motDePasse : yup.string().required("Required"),
        // comments : yup.string().required("Required"),
        address : yup.string().required("Required"),
        
        social : yup.object().shape({
            facebook : yup.string().required("Required"),
            twitter : yup.string().required("Required")
        }),

        phoneNumbers : yup.array().of(yup.string().required("Required"))
    }
)

const validateComments = value => {
    let error
    if(!value){
        error = 'Require'
    }
    return error
}

function FormulaireV2() {
    const[formValues, setFormValues] = useState(null)
    return (
        <Formik initialValues= {formValues || initialValues}
                onSubmit= {onSubmit}
                enableReinitialize
                validationSchema = {validationSchema}
                /* validateOnMount */
                /* validateOnChange = {false}
                validateOnBlur = {false} */
        >
            {
                formik =>{
                    console.log('Formik props', formik)
                    return (
                        <Form>
                <label htmlFor="nom"> Nom :  </label> 
                <Field type="text" 
                       name="nom" 
                       id="nom" 
                />
                <ErrorMessage name="nom" component={TextError}/>
                <br/><br/>
                <label htmlFor="prenom"> Prenom :  </label>
                <Field type="text"
                       name="prenom" 
                       id="prenom" 
                />
                <ErrorMessage name="prenom" component={TextError}/>
                <br/><br/>
                <label htmlFor="eMail"> E-mail :  </label>
                <Field type="email" 
                       name="eMail" 
                       id="eMail" 
                />
                <ErrorMessage name="eMail">
                    
                    {
                        (errorMsg) => 
                            <span className='error'>
                                <br/>{errorMsg}
                            </span>
                        
                    }
                </ErrorMessage>
                <br/><br/>
                <label htmlFor="motDePasse"> Mot-de-passe :  </label>
                <Field type="password" 
                       name="motDePasse" 
                       id="motDePasse" 
                />
                <ErrorMessage name="motDePasse" component={TextError}/>
                <br/><br/>
                <label htmlFor="comments"> Comments :  </label>
                <Field as="textarea" 
                       name="comments" 
                       id="comments" 
                       validate={validateComments}
                />
                <ErrorMessage name="comments" component={TextError}/>
                <br/><br/>
                <label htmlFor="address"> Adresse :  </label>
                <FastField type="text" 
                       name="address" 
                       id="address" 
                >
                    {
                        (props) => {
                            console.log('Field render');
                            const {field, form, meta} = props 
                            return <div>
                                        <input id="address" {...field}/>
                                        {meta.error && meta.touch ? <span>{meta.error}</span> : null}
                                    </div>
                        }
                    }
                </FastField>
                <ErrorMessage name="address" component={TextError}/>
                <br/><br/>
                <label htmlFor="facebook">Facebook Profile : </label>
                <Field type="text" id="facebook" name="social.facebook"/>
                <ErrorMessage name="social.facebook" component={TextError}/>
                <br/><br/>
                <label htmlFor="twitter">Twitter Profile : </label>
                <Field type="text" id="twitter" name="social.twitter"/>
                <ErrorMessage name="social.twitter" component={TextError}/> 
                <br/><br/>
                <label htmlFor="primaryPh">Primary Phone number : </label>
                <Field type="text" id="primaryPh" name="phoneNumbers[0]"/> 
                <ErrorMessage name="phoneNumbers[0]" component={TextError}/>
                <br/><br/>
                <label htmlFor="secondaryPh">Secondary Phone number : </label>
                <Field type="text" id="secondaryPh" name="phoneNumbers[1]"/>
                <ErrorMessage name="phoneNumbers[1]" component={TextError}/> 
                <br/><br/>
                <label>List of phone numbers</label>
                <FieldArray name="phNumbers">
                    {   (fieldArrayProps) =>{
                            const {form, push, remove} = fieldArrayProps
                            const {values} = form
                            const {phNumbers} = values
                            console.log("Form errors", form.errors);
                            return <div>
                            {
                                phNumbers.map((phNumber, index) => (
                                  <div key={index}>
                                    <Field name={`phNumbers[${index}]`}/>
                                    { index > 0 && ( 
                                    <button type="button" onClick={() => { remove(index) }}> - </button> 
                                    )}
                                    <button type="button" onClick={() => { push('') }}> + </button>   
                                  </div>  
                                ))
                            }
                                </div>
                        }

                    }
                </FieldArray>

                {/* <button type='button' onClick= {()=>  formik.validateField("comments")}>Validate comments</button>
                <button type='button' onClick={()=> formik.validateForm()}>Validate all</button>
                <button type='button' onClick= {()=>  formik.setFieldTouched("comments")}>Visit comments</button>
                <button type='button' onClick={()=> formik.setTouched({
                        name : true,
                        eMail : true,
                        address : true,
                        comments : true
                    }
                )}>Visit fields</button> */}
                <button type='button' onClick={( ) => setFormValues(savedValues)}>Load Saved Data</button>
                <button type="reset">Reset</button>
                <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
            </Form>
                    )
                }
            }
            
        </Formik>
    )
}

export default FormulaireV2
