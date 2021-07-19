import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function CreateAEMonthlySitRep() {

    const initialValues = {
        attendancest1:"",
        attendancest2:"", 
        attendancesto:"", 
        fourhourspatientst1:"",
        fourhourspatientst2:"", 
        fourhourspatientsto:"", 
        fourtwelvehourspatients:"",
        twelvehourspatients:"", 
        emergencyadmissionst1:"",
        emergencyadmissionsto:"", 
        emergencyadmissionst2:"", 
        admissionstother:"",
    };

    const validationSchema = Yup.object().shape({
        attendancest1: Yup.number().required("You must input a valid number."),
        attendancest2: Yup.number().required("You must input a valid number."), 
        attendancesto: Yup.number().required("You must input a valid number."), 
        fourhourspatientst1: Yup.number().required("You must input a valid number."),
        fourhourspatientst2: Yup.number().required("You must input a valid number."), 
        fourhourspatientsto: Yup.number().required("You must input a valid number."), 
        fourtwelvehourspatients: Yup.number().required("You must input a valid number."),
        twelvehourspatients: Yup.number().required("You must input a valid number."), 
        emergencyadmissionst1: Yup.number().required("You must input a valid number."),
        emergencyadmissionsto: Yup.number().required("You must input a valid number."), 
        emergencyadmissionst2: Yup.number().required("You must input a valid number."), 
        admissionstother: Yup.number().required("You must input a valid number."),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/maesitrep", data).then((response) => {
            console.log("Data added successfully.");
        });
    };

    return (
      <div className="MAESitRepPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Number of A&E Attendances </label>
          <ErrorMessage name="title" component="span" />
          <Field 
                            id=""
                            type="number"
                            name="attendancest1"
                            placeholder="0"
                            />
                             <Field 
                            id=""
                            type="number"
                            name="attendancest2"
                            placeholder="0"
                            />
                             <Field 
                            id=""
                            type="number"
                            name="attendancesto"
                            placeholder="0"
                            />
         
          <button type="submit">Save Data</button>
        </Form>
      </Formik>
    </div>
    )
}

export default CreateAEMonthlySitRep
