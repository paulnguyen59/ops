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
                        <ProjectItem  title = "Nhà hàng 01" id = "1"></ProjectItem>
                        <ProjectItem thumb = {thumb2}  status = 'sold' title = "Nhà hàng 02" id = "2"></ProjectItem>
                        <ProjectItem thumb = {thumb3} status = 'deposit' title = "Nhà hàng 03" id = "3"></ProjectItem>
                        <ProjectItem thumb = {thumb4} title = "Nhà hàng 04" id = "4"></ProjectItem>
                        <ProjectItem thumb = {thumb5} title = "Nhà hàng 05" id = "5"></ProjectItem>
                        <ProjectItem title = "Nhà hàng 06" id = "6"></ProjectItem>
                        <ProjectItem title = "Nhà hàng 07" id = "7"></ProjectItem>
                        <ProjectItem title = "Nhà hàng 08" id = "8"></ProjectItem>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectList;