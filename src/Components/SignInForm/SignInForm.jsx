import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignInForm = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};

                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label htmlFor="sign-up-email">
                        Email:
                    </label>
                    <Field type="email" name="email" className="form-control mb-3"  id="sign-up-email" />
                    <ErrorMessage name="email" component="div" />
                    <label htmlFor="sign-up-password">
                        Password:
                    </label>
                    <Field type="password" name="password" className="form-control mb-3"  id="sign-up-password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        Sign in
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default SignInForm;