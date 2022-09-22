import React from 'react';
import './ProjectTab.scss'
const ProjectTab = () => {
    return (
        <div className='project-tab'>
            <div className="project-tab-item">
                <h3 className="project-tab-title"><span>Tổng quan</span></h3>
                <div className="project-tab-content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className="project-tab-item">
                <h3 className="project-tab-title"><span>Chi tiết</span></h3>
                <div className="project-tab-content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className="project-tab-item">
                <h3 className="project-tab-title"><span>Công ty chủ quản</span></h3>
                <div className="project-tab-content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className="project-tab-item">
                <h3 className="project-tab-title"><span>Video</span></h3>
                <div className="project-tab-content">
                    <iframe width="100%" height="480" src="https://www.youtube.com/embed/wSrOkpqKrek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="project-tab-item">
                <h3 className="project-tab-title"><span>Vị trí</span></h3>
                <div className="project-tab-content">
                    <iframe width="100%" height="480" title='vị trí' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.it/maps?q=Thạch Quảng, Thạch Thành, Thanh hóa&amp;output=embed"></iframe>
                </div>
            </div>
            
        </div>
    );
};
export default ProjectTab;