import React from 'react';
import Button from '../Button/Button';
import './NewsTeller.css';

const NewsTeller = () => {
    return (
        <div className='NewsTeller-Container'>
            <h2 className='NewsTeller-Title'>Want To Hear Coffee News From Us?</h2>
            <div>
                <input className='NewsTeller-Input' type="text" placeholder='Your E-Mail Address'/>
                <span className='Subscribe-Button'>
                <Button>Subscribe</Button>
                </span>
            </div>
            
            <p className='NewsTeller-Footer'><span><input type="checkbox" name="" id="" /></span>Please Read The Coffee Address Personal Data Processing Policy <span className='NewsTeller-Footer-Span'>Here.</span></p>
        </div>
    );
};

export default NewsTeller;