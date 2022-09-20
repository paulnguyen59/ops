import React from 'react';
import { Link } from 'react-router-dom';
const LandItem = (props) => {
    const statusClass = props.status ? "land-item " + props.status : "land-item invest";

    return (
        <>
            <div className={statusClass}>
                <Link to='project'>
                    <h3 className='land-item-title'>Nhà hàng #01</h3>
                    <p className='land-item-area'>120 m<sup>2</sup> </p>
                    <p className='land-item-price'>480 triệu (VNĐ) </p>
                </Link>

            </div>
        </>
    );
};
export default LandItem;