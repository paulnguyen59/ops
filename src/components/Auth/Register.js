import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <div className="auth-form">
                <div className="form-group">
                    <label htmlFor="fullname">Họ tên <span className='text-danger'>(*)</span> </label>
                    <input type="fullname" className="form-control" id='fullname' placeholder='Nhập Họ tên của bạn' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email <span className='text-danger'>(*)</span> </label>
                    <input type="email" className="form-control" id='email' placeholder='Nhập Email của bạn' />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Số điện thoại <span className='text-danger'>(*)</span> </label>
                    <input type="tel" className="form-control" id='phone' placeholder='Nhập số điện thoại của bạn' />
                </div>
                <div className="form-group">
                    <label htmlFor="code">Mã giới thiệu</label>
                    <input type="code" className="form-control" id='code' placeholder='Nhập mã giới thiệu của bạn' />
                </div>
               
                <div className="form-group">
                    <button className='btn btn-primary btn-auth'>Đăng ký</button>
                </div>
            </div>
            <div className="auth-bottom">
                <p>Đã có tài khoản? <Link to='/auth/login'>Đăng nhập ngay</Link>  </p>
            </div>

        </>
    );
};

export default Register;