import React from 'react';
import './ProjectMeta.scss'
const ProjectMeta = (props) => {
    const handleInvest = () => {
        alert("Bạn cần đăng nhập để thực hiện chức năng này");
    }
    return (
        <div className='project-meta'>
            <div className="project-meta-text">
                <div className="project-meta-title">
                    <h1>Nhà hàng 0{props.id}</h1>
                    <span className='project-meta-badge'>Mở bán</span>
                </div>

                <div className='project-meta-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 project-item-position-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>Địa chỉ: Thạch Quảng, Thạch Thành, Thanh hóa</span>
                </div>
                <div className='project-meta-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                    <span>Diện tích: 140.000 m2</span>
                </div>
            </div>
            <div className="project-meta-cta">
                <button className='btn btn-second' onClick={handleInvest}>
                    <span>Đầu tư ngay</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>

        </div>
    );
};
export default ProjectMeta;