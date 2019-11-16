import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const STYLES = styled.div`
    .error {
    border: 2px solid #FF6565;
    }

  .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }
`;

const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
  });
  

const NewsLetterForm = () => {
    return (
        <STYLES>
            <Formik
            initialValues={{ email:"" }}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                // When button submits form and form is in the process of submitting, submit button is disabled
                setSubmitting(true);
    
                // Simulate submitting to database, shows us values submitted, resets form
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
              }, 500);
            }}
            >
            {( {values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                    {console.log(values)}
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={touched.email && errors.email ? "error" : null}
                    />
                    {touched.email && errors.email ? (
                        <div className="error-message">{errors.email}</div>
                    ): null}
                    <button variant="primary" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>    
            )}
            </Formik>
        </STYLES>
    );
}

export default NewsLetterForm;