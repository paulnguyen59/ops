import React from 'react';
import thumb from '../Project/thumb.jpg';
import './ProjectVertical.scss'
const ProjectVerticalItem = () => {
    return (
        <div className='project-vertical-item'>
            <div className="project-vertical-item-thumb">
                <img src={thumb} alt='' />
            </div>
            <div className="project-vertical-item-text">
                <h4>Nhà hàng 01</h4>
                <div className="project-vertical-item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 project-item-position-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>Thạch Quảng, Thạch Thành, Thanh hóa</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectVerticalItem;