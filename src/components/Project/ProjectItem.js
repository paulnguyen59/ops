import React from 'react';
import { Link } from 'react-router-dom';
import thumb from './thumb.jpg';
const ProjectItem = (props) => {
    const status = props.status ? props.status : "invest";
    const badgeClass = `project-item-badge ${status}`;
    const url = `project-detail/${props.id}`;
    return (
        <div className='project-item'>
            <div className="project-item-thumb">
                <Link to={url}> <img src={props.thumb ? props.thumb : thumb} alt = "" /></Link>
            </div>
            <div className="project-item-text">
                <h3 className="project-item-title">
                    <Link to={url} >{props.title ? props.title : "Nhà hàng 01"}</Link>
                </h3>
                <div className="project-item-position">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 project-item-position-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>Thạch Quảng, Thạch Thành, Thanh hóa</span>
                </div>
                <span className={badgeClass}>Đã bán</span>
            </div>
        </div>
    );
};
export default ProjectItem;