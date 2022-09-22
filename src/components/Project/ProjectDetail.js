import React from 'react';
import ProjectMeta from '../ProjectMeta/ProjectMeta';
import ProjectTab from '../ProjectTab/ProjectTab';
import ProjectThumb from '../ProjectThumb/ProjectThumb';
import ProjectBreadcrumb from '../ProjectBreadcrumb/ProjectBreadcrumb';
import { useParams } from "react-router-dom";
import './ProjectDetail.scss';
import ProjectInvest from '../ProjectInvest/ProjectInvest';
import SidebarProject from '../Sidebar/SidebarProject';
const ProjectDetail = () => {
    let { id } = useParams(); 
    return (
        <div className='detail-page'>
            <div className="container">
                <div className="detail-content">
                    <ProjectBreadcrumb></ProjectBreadcrumb>
                    <ProjectThumb></ProjectThumb>
                    <ProjectMeta id = {id}></ProjectMeta>
                    <ProjectInvest></ProjectInvest>
                    <ProjectTab></ProjectTab>
                </div>
                <div className="detail-sidebar">
                    <SidebarProject></SidebarProject>
                </div>
            </div>
        </div>
    );
};
export default ProjectDetail;