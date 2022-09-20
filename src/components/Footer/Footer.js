import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import logo from '../Header/logo.png'
import './Footer.scss'
const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="container">
                    <div className="footer-main-inner">
                        <div className="footer-item footer-info">
                            <img src={logo} />
                            <p className='footer-title'>CÔNG TY TNHH OPEN AND SHARE</p>
                            <div className="footer-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon-svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span>
                                    107 Dân Chủ, Phường Bình Thọ, TP. Thủ Đức, Hồ Chí Minh</span>
                            </div>
                            <div className="footer-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon-svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>

                                <span>078.777.4949</span>
                            </div>
                            <div className="footer-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon-svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <span>cskh@openandshare.vn</span>
                            </div>


                        </div>
                        <div className="footer-item footer-link">
                            <p className='footer-title'>Liên kết nhanh</p>
                            <ul>
                                <li><a href='#'>Câu hỏi thường gặp</a></li>
                                <li><a href='#'>Thông báo</a></li>
                                <li><a href='#'>Liên hệ</a></li>
                                <li><a href='#'>Quy chế hoạt động</a></li>
                                <li><a href='#'>Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                        <div className="footer-item footer-form">
                            <div className="footer-form-item">
                                <p className='footer-title'>Đăng ký nhận tin</p>
                                <div className="form-group">
                                    <input type="text" className='form-control' placeholder='Nhập email của bạn' />
                                    <button className='btn btn-primary'>Gửi
                                    </button>
                                </div>
                            </div>
                            <div className="footer-form-item">
                                <p className='footer-title'>Mạng xã hội</p>
                                <div className="footer-soical">
                                    <div className="footer-soical-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                                    </div>
                                    <div className="footer-soical-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Footer;