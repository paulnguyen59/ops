import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const User = () => {
    return (
        <div className='user-container'>
            <div className="user-header">
                Header user
            </div>
            <div className="user-content">
                <div className="user-sidebar">
                   <Link to = "/user">Dashboard</Link>
                   <Link to = "/user/manage-contract">Hợp đồng của tôi</Link>
                   <Link to = "/user/manage-bank-account">Tài khoản ngân hàng</Link>
                   <Link to = "/user/manage-project">Bất động sản của tôi</Link>
                   <Link to = "/user/manage-transaction">Lịch sử giao dịch</Link>
                </div>
                <div className="user-main">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="user-footer">
                Footer User
            </div>
        </div>
    );
};

export default User;