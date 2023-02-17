import React from 'react';
import './AboutUs.css';
import AboutImg1 from "../../assets/images/About_Us/Rectangle 1.png";
import AboutImg2 from "../../assets/images/About_Us/Rectangle 2.png";
import AboutImg3 from "../../assets/images/About_Us/Rectangle 3.png";
import AboutImg4 from "../../assets/images/pngegg (17) 1.png";
import Button from '../Button/Button';

const AboutUs = () => {
    return (
        <div className='About-Container'>
            <div className='About-images'>
                <img src={AboutImg1} alt="" />
                <img src={AboutImg2} alt="" />
                <img src={AboutImg3} alt="" />
            </div>
            <div className='About-Banner'>
                <div>
                    <h2 className='About-title'>We’re a dedicated gluten-free café.</h2>
                    <p className='About-sub-title'>But you’d never know if we didn’t mention it.</p>
                    <p className='About-desc'>You see, our creations redefine what gluten-free means. Impossibly moist layer cakes, decadent desserts, <br /> pillowy rolls, tender crumbs—everything we make is a reflection of our commitment to flavor, texture and <br /> artistry of the highest caliber. Informed by classical French pastry technique and inspired by California’s <br /> spirit of creativity, we bake because life’s too short for anyone to skip cake.</p>
                    <Button>Read More</Button>
                </div>
                <div className='About-image2'>
                <img src={AboutImg4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;