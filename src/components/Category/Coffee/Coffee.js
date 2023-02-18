import React from 'react';
import './Coffee.css';
import drinks from "../../../assets/images/drinks.png";

const Coffee = () => {
    return (
        <div className='Coffee-Section'>
            <h2 className='Coffee-Category-Title'>Coffee</h2>
            <div className='Coffee-Category-Container'>
                <div className='Coffee-Category-Card'>   
                    <div className='Coffee-Card-Info'>
                        <div className='Coffee-Card-Img'>
                            <img src={drinks} alt="" />
                            <p className='Coffee-Card-Title'>Espresso</p>
                        </div>
                    </div>   
                </div>
                <div className='Coffee-Category-Card'>   
                    <div className='Coffee-Card-Info'>
                        <div className='Coffee-Card-Img'>
                            <img src={drinks} alt="" />
                            <p className='Coffee-Card-Title'>Latte</p>
                        </div>
                    </div>   
                </div>
                <div className='Coffee-Category-Card'>   
                    <div className='Coffee-Card-Info'>
                        <div className='Coffee-Card-Img'>
                            <img src={drinks} alt="" />
                            <p className='Coffee-Card-Title'>Capuccinno</p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Coffee;