import React from 'react'
import { useFormik } from "formik"

const initialValues = {
    nom: "Zane",
    prenom: "",
    eMail: "",
    motDePasse: ""
}
const onSubmit = values => { console.log("Values Submit : ", values); }
const validate = values => {
    let errors = {}
    const message = "Ce champs doit être rempli"
    for (const key in values) {
        if (values.hasOwnProperty(key)) {
            if (!values[key]){
                    errors[key] = message
            } 
        }
    }
    return errors
}

function Formulaire() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log("visited fields", formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="nom"> Nom :  </label> 
                <input type="text" 
                       name="nom" 
                       id="nom" 
                       onChange={formik.handleChange} 
                       value={formik.values.nom}
                       onBlur={formik.handleBlur}
                />
                {formik.errors.nom && formik.touched.nom ? <span>{formik.errors.nom}</span> : null }
                <br/><br/>
                <label htmlFor="prenom"> Prenom :  </label>
                <input type="text"
                       name="prenom" 
                       id="prenom" 
                       onChange={formik.handleChange} 
                       value={formik.values.prenom}
                       onBlur={formik.handleBlur}
                />
                {formik.errors.prenom && formik.touched.prenom ? <span>{formik.errors.prenom}</span> : null }
                <br/><br/>
                <label htmlFor="eMail"> E-mail :  </label>
                <input type="email" 
                       name="eMail" 
                       id="eMail" 
                       onChange={formik.handleChange} 
                       value={formik.values.eMail}
                       onBlur={formik.handleBlur}
                />
                {formik.errors.eMail && formik.touched.eMail ? <span>{formik.errors.eMail}</span> : null }
                <br/><br/>
                <label htmlFor="motDePasse"> Mot-de-passe :  </label>
                <input type="password" 
                       name="motDePasse" 
                       id="motDePasse" 
                       onChange={formik.handleChange} 
                       value={formik.values.motDePasse}
                       onBlur={formik.handleBlur}
                />
                {formik.errors.motDePasse && formik.touched.motDePasse ? <span>{formik.errors.motDePasse}</span> : null }
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Formulaire
