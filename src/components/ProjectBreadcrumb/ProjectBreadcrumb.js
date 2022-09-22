import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectBreadcrumb.scss'
const ProjectBreadcrumb = () => {
    return (
        <div className='project-breadcrumb'>
            <ul>
                <li><Link to = "/">Trang chủ</Link></li>
                <li><Link to = "/">Danh mục</Link></li>
                <li><span>Nhà hàng 01</span></li>
            </ul>
        </div>
    );
};

export default ProjectBreadcrumb;