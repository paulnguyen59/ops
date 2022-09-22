import React from 'react';
import ProjectListVertical from '../ProjectListVertical/ProjectListVertical';
import './Sidebar.scss'
const SidebarProject = () => {
    return (
        <div className='sidebar-project'>
            <div className="sidebar-project-item">
                <h3>Danh sách đầu tư tương tự</h3>
                <ProjectListVertical></ProjectListVertical>
            </div>
        </div>
    );
};

export default SidebarProject;