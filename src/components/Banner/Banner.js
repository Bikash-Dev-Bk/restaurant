import React from 'react';
import Hero from './Hero/Hero';
import Quotes from './Quotes/Quotes';
import './Banner.css';

const Banner = () => {
    return (
        <div className='Banner-Container'>
            <Hero></Hero>
            <Quotes></Quotes>
        </div>
    );
};

export default Banner;