import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const STYLES = styled.div`

  .error-message {
    color: #FF6565;
    padding: 1em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }

    fieldset {
        font-size: 1.1em;
        padding: 0.5em;
        border: none;
    }

    input {
        border: 2px solid #FFA400;
        width: 20em;
        height: 2em;
    }

    button {
        border: 2px solid #FFA400;
        background: #FFA400;
        padding: 1em;
        height: 2em;
        width: 5em;
        color: snow;
    }

    label, input, button {
        font-size: inherit;
        padding: 0.2em;
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
    }

    @media(max-width: 500px) {
        input {
            width: auto;
        }
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
                    {/*console.log(values)*/}
                    <fieldset>
                        <input 
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {touched.email && errors.email ? (
                            <div className="error-message">{errors.email}</div>
                        ): null}
                        <button variant="primary" type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </fieldset>
                </form>    
            )}
            </Formik>
        </STYLES>
    );
}

export default NewsLetterForm;