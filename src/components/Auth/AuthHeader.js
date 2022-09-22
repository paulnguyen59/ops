import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Header/logo.png'
const AuthHeader = () => {
    return (
        <>
            <div className="auth-logo">
                <Link to = "/"><img src = {logo} alt = 'logo' /></Link>
            </div>
        </>
    );
};

export default AuthHeader;