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
        <div>
             <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
           integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
           crossOrigin="anonymous"
      />
      <div className="createAEMonthlySitRepPage">
        <div className="col-6 mx-auto">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th colSpan={10} scope="col"><p className="text-end px-5 pt-2">Attendances by A&amp;E Type</p></th>
              </tr>
              <tr>
                <th scope="col" />
                <th scope="col"><center>Type 1</center></th>
                <th scope="col"><center>Type 2</center></th>
                <th scope="col"><center>Other</center></th>
              </tr>
            </thead>
            <tbody>
                <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}>
                    
              <tr>
                <th scope="row"><label>Number of A&amp;E Attendances</label></th>
                <td>
                  <div className="col p-4">
                    <div className="form-group">
                        <Form>
                      <Field 
                            id=""
                            type="number"
                            name="attendancest1"
                            placeholder="0"
                            />
                      <ErrorMessage name="attendancest1" component="span" />      
                      </Form>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="col p-4">
                    <div className="form-group">
                        <Form>
                    <Field 
                            id=""
                            type="number"
                            name="attendancest2"
                            placeholder="0"
                            />
                    <ErrorMessage name="attendancest2" component="span" />  
                    </Form>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="col p-4">
                    <div className="form-group">
                        <Form>
                    <Field 
                            id=""
                            type="number"
                            name="attendancesto"
                            placeholder="0"
                            />
                    <ErrorMessage name="attendancesto" component="span" />  
                    </Form>
                    </div>
                  </div>
                </td>
              </tr>
          
              </Formik>
              <tr>
              </tr>
              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>          
              <tr>
                <th scope="row"><label>Number of Patients who have had a total time in A&amp;E of  <br />over 4 hours from arrival to discharge,transfer of admission</label></th>
                <td>
                  <div className="col p-4">
                    <div className="form-group">
                        <Form>
                    <Field 
                            id=""
                            type="number"
                            name="fourhourspatientst1"
                            placeholder="0"
                            />
                            <ErrorMessage name="fourhourspatientst1" component="span" />  
                            </Form>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="col p-4">
                    <div className="form-group">
                        <Form>
                    <Field 
                            id=""
                            type="number"
                            name="fourhourspatientst2"
                            placeholder="0"
                            />
                            <ErrorMessage name="fourhourspatientst2" component="span" />  
                            </Form>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="col p-4">
                    <div className="form-group">
                        <Form>
                    <Field 
                            id=""
                            type="number"
                            name="fourhourspatientsto"
                            placeholder="0"
                            />
                            <ErrorMessage name="fourhourspatientsto" component="span" />  
                            </Form>
                    </div>
                  </div>
                </td>
              </tr>
              </Formik>
              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              <tr>
                <th scope="row"><label>Number of patient who have waited 4-12 hours in A&amp;E from <br />decision to admit to admission</label></th>
                <td colSpan={3}>
                  <div className="col-7 p-4 mx-auto">
                    <div className="form-group">
                        <Form>
                    <Field 
                            id=""
                            type="number"
                            name="fourtwelvehourspatients"
                            placeholder="0"
                            />
                             <ErrorMessage name="fourtwelvehourspatients" component="span" />  
                             </Form>
                    </div>
                  </div>
                </td>
              </tr>
              </Formik>
              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              <tr>
                <th scope="row"><label>Number of patient who have over 12 hours in A&amp;E from <br />decision to admit to admission</label></th>
                <td colSpan={3}>
                  <div className="col-7 p-4 mx-auto">
                    <div className="form-group">
                        <Form>
                    <Field 
                            id=""
                            type="number"
                            name="twelvehourspatients"
                            placeholder="0"
                            />
                             <ErrorMessage name="twelvehourspatients" component="span" />  
                             </Form>
                    </div>
                  </div>
                </td>
              </tr>
              </Formik>
            </tbody>
          </table>
        </div>
        <div className="col-6 mx-auto">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th colSpan={10} scope="col"><p className="text-end px-5 pt-2">Number of Admissions</p></th>
              </tr>
            </thead>
            <tbody>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              <tr>
                <th scope="row"><label>Emergency Admissions via A&E - Type 1</label></th>
                <td colSpan={3}>
                  <div className="col-6 mx-auto">
                    <div className="form-group">
                        <Form>
                    <Field 
                            id=""
                            type="number"
                            name="emergencyadmissionst1"
                            placeholder="0"
                            />
                            <ErrorMessage name="emergencyadmissionst1" component="span" />  
                            </Form>
                    </div>
                  </div>
                </td>
              </tr>
              </Formik>
              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              <tr>
                <th scope="row"><label>Emergency Admissions via A&E - Type 2</label></th>
                <td colSpan={3}>
                  <div className="col-6 mx-auto">
                    <div className="form-group">
                        <Form>
                    <Field 
                            id=""
                            type="number"
                            name="emergencyadmissionst2"
                            placeholder="0"
                            />
                             <ErrorMessage name="emergencyadmissionst2" component="span" />  
                             </Form>
                    </div>
                  </div>
                </td>
              </tr>
              </Formik>
              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              <tr>
                <th scope="row"><label>Emergency Admissions via A&E - Other A&E Department</label></th>
                <td colSpan={3}>
                  <div className="col-6 mx-auto">
                    <div className="form-group">
                        <Form>
                    <Field 
                            id=""
                            type="number"
                            name="emergencyadmissionsto"
                            placeholder="0"
                            />
                             <ErrorMessage name="emergencyadmissionsto" component="span" />  
                             </Form>
                    </div>
                  </div>
                </td>
              </tr>
              </Formik>
              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              <tr>
                <th scope="row"><label>Other Emergency Admissions</label></th>
                <td colSpan={3}>
                  <div className="col-6 mx-auto">
                    <div className="form-group">
                        <Form>
                    <Field 
                            id=""
                            type="number"
                            name="admissionstother"
                            placeholder="0"
                            />
                              <ErrorMessage name="admissionstothe" component="span" />  
                              </Form>
                    </div>
                  </div>
                </td>
              </tr>
              </Formik>
            </tbody>
          </table>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              <Form>
       
            <button type="submit">Save Data</button>
           
            </Form>
            </Formik>
        </div>
      </div>
        </div>
    );
}

export default CreateAEMonthlySitRep;
