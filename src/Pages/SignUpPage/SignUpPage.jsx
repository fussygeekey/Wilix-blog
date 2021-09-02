import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../Components/SignUpForm/SignUpForm'

const SignUpPage = () => {
    return (
        <div className="d-flex flex-column">
            <h2>
                Sign up
            </h2>
            <Link to="/login" className="text-decoration-none">
                Have an account?
            </Link>
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;
