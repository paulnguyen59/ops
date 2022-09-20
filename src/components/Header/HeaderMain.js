import React from 'react';
import logo from '../Header/logo.png'
import logo2 from '../Header/logo2.png'
import { NavLink, Link } from "react-router-dom";
const HeaderMain = () => {
    return (
        <div className='header-main'>
            <div className="container">
                <div className="header-main-logo">
                    <NavLink to="/"><img src={logo} /></NavLink>
                </div>
                <div className="header-main-menu">
                    <ul>
                        <li><NavLink to="/">Trang chủ</NavLink></li>
                        <li><NavLink to="/blog">Tin tức</NavLink></li>
                        <li><NavLink to="/project">Bất động sản</NavLink></li>
                        <li><NavLink to="/project">Liên hệ</NavLink></li>
                    </ul>
                </div>
                <div className="header-main-buttons">
                    <Link to="/auth/login" className='btn btn-primary'>Đăng nhập</Link>
                    <Link to="/auth/register" className='btn btn-primary btn-outline'>Đăng ký</Link>
                </div>
            </div>

        </div>
    );
};
export default HeaderMain;