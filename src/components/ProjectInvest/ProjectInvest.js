import React from 'react';
import './ProjectInvest.scss'
const ProjectInvest = () => {
    return (
        <div className='project-invest'>
            <div className="project-invest-price">
                <div className="project-invest-price-inner">
                    <p className='project-invest-price-title'>Tổng giá trị đầu tư  (VND)</p>
                    <span className="project-invest-priceNumber">10.000.0000.000</span>
                </div>

            </div>
            <div className="project-invest-price invested">
                <div className="project-invest-price-inner">
                    <p className='project-invest-price-title'>Đã đầu tư (VND)</p>
                    <span className="project-invest-priceNumber">1.200.0000.000</span>
                </div>
            </div>
            <div className="project-invest-price remain">
                <div className="project-invest-price-inner">
                    <p className='project-invest-price-title'>Hạn mức đầu tư còn lại  (VND)</p>
                    <span className="project-invest-priceNumber">8.800.0000.000</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectInvest;