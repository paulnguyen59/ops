import React from 'react';
import slider1 from './slide1.jpg'
import slider2 from './slider2.jpg'
import slideBg from './slidebg2.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.scss'
import Slider from "react-slick";
import LandItem from './Land/LandItem';
import Land from './Land/Land';
import ProjectList from './ProjectList';
const Homepage = () => {
    let settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <section id='section-hero' className='section' style={{ backgroundImage: `url(${slideBg})` }}>
                <div className="hero-content">
                    <div className="container">
                        <form>
                            <div className="hero-form-top">
                                <div className="form-group">
                                   
                                    <input type="text" className='form-control' placeholder='Tìm kiếm hạng mục đầu tư' />
                                </div>
                                <button className='btn btn-primary'>Tìm kiếm</button>
                            </div>

                            <div className="form-group">

                            </div>
                        </form>
                    </div>
                </div>

                <div className="bg-overlay"></div>
                {/* <div className="slider-list">
                    <Slider {...settings}>
                        <div className="slider-item">
                            <img src={slider1} />
                        </div>
                        <div className="slider-item">
                            <img src={slider2} />
                        </div>
                    </Slider>
                </div> */}
            </section>
            <Land></Land>
            <ProjectList></ProjectList>


        </>
    );
};
export default Homepage;