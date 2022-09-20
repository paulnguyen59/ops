import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <div className="auth-header">Header Auth</div>
            <div className="auth-main">
                <Outlet></Outlet>
            </div>
            <div className="auth-footer">Footer auth</div>
        </div>
    );
};

export default AuthLayout;