import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../Components/SignUpForm/SignUpForm'

export default () => {
    return (
        <React.Fragment>
            <h2>
                Sign up
            </h2>
            <Link to="/login" className="text-decoration-none">
                Have an account?
            </Link>
            <SignUpForm />
        </React.Fragment>
    );
};
