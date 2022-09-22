import React, { Component } from 'react';
import thumb from '../Project/thumb.jpg';
import Slider from "react-slick";
import './ProjectThumb.scss'

export default class ProjectThumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const settings = {

            infinite: false,
            slidesToShow: 7,


        };
        return (
            <div className='project-thumb-wrap'>
              
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    className='project-thumb'
                >
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                </Slider>
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}

                    swipeToSlide={true}
                    focusOnSelect={true}
                    className='project-thumb-bottom'
                    {...settings}
                >
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>
                    <div>
                        <img src={thumb} alt='' />
                    </div>



                </Slider>
            </div>
        )
    }
}
