import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../../Components/SignInForm/SignInForm'

const SignInPage = () => {
    return (
        <div className="d-flex flex-column">
            <h2>
                Sign in
            </h2>
            <Link to="/register" className="text-decoration-none">
                Need an account?
            </Link>
            <SignInForm />
        </div>
    );
};

export default SignInPage;