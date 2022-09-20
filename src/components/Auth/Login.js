import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="auth-form">
                <div className="form-group">
                    <label htmlFor="email">Email <span className='text-danger'>(*)</span> </label>
                    <input type="email" className="form-control" id='email' placeholder='Nhập Email của bạn' />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu <span className='text-danger'>(*)</span> </label>
                    <input type="password" className="form-control" id='password' placeholder='Nhập mật khẩu của bạn' />
                </div>
                <div className="form-group">
                    <button className='btn btn-primary btn-auth'>Đăng nhập</button>
                </div>
            </div>
            <div className="auth-bottom">
                <p>Chưa có tài khoản? <Link to = '/auth/register'>Đăng ký ngay</Link>  </p>
            </div>

        </>
    );
};

export default Login;