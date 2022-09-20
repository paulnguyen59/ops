import React, { useState } from 'react';
import LandItem from './LandItem';
const Land = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleCategoryTitle = (e) => {
        setActiveTab(e.target.getAttribute('id'));
    }
   

    return (
        <>
            <section className='section pb-0' id='section-lo-dat'>
                <div className="container">
                    <div className="title">
                        <h2 className="title-main">Bảng cập nhật tình trạng đầu tư ngành F&B</h2>
                        <div className="status-group">
                            <div className="status-item">
                                <span className='invest'></span>
                                <span>Đầu tư</span>
                            </div>
                            <div className="status-item">
                                <span className='sold'></span>
                                <span>Đã bán</span>
                            </div>
                            <div className="status-item">
                                <span className='deposit'></span>
                                <span>Đặt cọc</span>
                            </div>
                            <div className="status-item">
                                <span className='pending'></span>
                                <span>Chờ mở bán</span>
                            </div>
                        </div>
                    </div>
                    <div className="category">
                        <span className={activeTab === "tab1" ? "active" : ""} id="tab1" onClick={handleCategoryTitle}>Nhà hàng(51) </span>
                        <span className={activeTab === "tab2" ? "active" : ""}  id="tab2" onClick={handleCategoryTitle}>Cafe (0)</span>
                        <span className={activeTab === "tab3" ? "active" : ""}  id="tab3" onClick={handleCategoryTitle}>Khách sạn (0)</span>
                    </div>
                    {/* <div className="category-content">
                        {activeTab}
                    </div> */}

                    <div className='land'>
                        <LandItem></LandItem>
                        <LandItem status='pending'></LandItem>
                        <LandItem status='sold'></LandItem>
                        <LandItem status='deposit'></LandItem>
                        <LandItem></LandItem>
                        <LandItem status='pending'></LandItem>
                        <LandItem></LandItem>
                        <LandItem></LandItem>
                        <LandItem></LandItem>
                        <LandItem></LandItem>
                        <LandItem></LandItem>
                        <LandItem></LandItem>
                       
                    </div>
                </div>
            </section>
        </>
    );
};
export default Land;