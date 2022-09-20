import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthHeader from './AuthHeader';
import './Auth.scss'
const AuthLayout = () => {
    return (
        <div className='auth-wrap'>
            <div className="auth-inner">
                <div className="auth-header">
                    <AuthHeader></AuthHeader>
                </div>
                <div className="auth-main">
                    <Outlet></Outlet>
                </div>
                {/* <div className="auth-footer">Footer auth</div> */}
            </div>

        </div>
    );
};

export default AuthLayout;