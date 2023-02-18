import React from 'react';
import './HeaderTop.css';
import location from '../../../assets/images/top-header/Location.png';
import time from '../../../assets/images/top-header/Future.png';

const HeaderTop = () => {
    return (
        <div className='Header-Top-Container'>
            <div>
                <p>Sign up for our Loyalty Program today and receive 15% OFF your first order.</p>
            </div>
            <div className='Right-Side'>
                <span>Need Help?</span>
                <span className='Right-Side-Element'>(+302) 555-0107-122</span>
                <span className='Right-Side-Element'><img src={time} alt="" /></span><span>08:00am - 10:00pm</span>
                <span className='Right-Side-Element'><img src={location} alt="" /></span><span>Our Locations</span>
            </div>
        </div>
    );
};

export default HeaderTop;