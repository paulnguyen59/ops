import React from 'react';
import ProjectItem from '../Project/ProjectItem';
import thumb2 from '../Project/thumb2.jpg';
import thumb3 from '../Project/thumb3.jpg';
import thumb4 from '../Project/thumb4.jpg';
import thumb5 from '../Project/thumb5.jpg';
const ProjectList = () => {
    return (
        <>
            <section className='section' id='section-quy-dat'>
                <div className="container">
                    <div className="title">
                        <h2 className="title-main">Danh sách đầu tư ngành F&B</h2>
                    </div>
                    <div className="project-list">
                        <ProjectItem  title = "Nhà hàng 01"></ProjectItem>
                        <ProjectItem thumb = {thumb2}  status = 'sold' title = "Nhà hàng 02"></ProjectItem>
                        <ProjectItem thumb = {thumb3} status = 'deposit' title = "Nhà hàng 03"></ProjectItem>
                        <ProjectItem thumb = {thumb4} title = "Nhà hàng 04"></ProjectItem>
                        <ProjectItem thumb = {thumb5} title = "Nhà hàng 05"></ProjectItem>
                        <ProjectItem title = "Nhà hàng 06"></ProjectItem>
                        <ProjectItem title = "Nhà hàng 07"></ProjectItem>
                        <ProjectItem title = "Nhà hàng 08"></ProjectItem>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectList;