import React from 'react';
import './Quotes.css';
import cafe from '../../../assets/images/cafe.png';
import QuoteBottom from '../../../assets/images/Quote/Quote bottom.png';
import QuoteTop from '../../../assets/images/Quote/Quote top.png';


const Quotes = () => {
    return (
        <div className='quotes'>
            
            <h2><span><img src={QuoteTop} alt="" /></span> <span className='quotes-title'>Coffee is a way of stealing time <br /> which should by rights belong to <br /> your older self.</span><span><img src={QuoteBottom} alt="" /></span></h2>
            
            <img src={cafe} alt="" />
        </div>
    );
};

export default Quotes;