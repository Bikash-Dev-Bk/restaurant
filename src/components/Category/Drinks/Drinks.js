import React from 'react';
import './Drinks.css';
import Smoothies from "../../../assets/images/Category/Drinks/pngegg (32) 1.png";
import ProteinShakes from "../../../assets/images/Category/Drinks/pngegg (33) 1.png";
import FrozenLemonade from "../../../assets/images/Category/Drinks/pngegg (34) 1.png";

const Drinks = () => {
    return (
        <div className='Drinks-Section'>
            <h2 className='Drinks-Category-Title'>Drinks</h2>
            <div className='Drinks-Category-Container'>
                <div className='Drinks-Category-Card'>   
                    <div className='Drinks-Card-Info'>
                        <div className='Drinks-Card-Img'>
                            <img src={FrozenLemonade} alt="" />
                            <p className='Drinks-Card-Title'>Frozen Lemonade</p>
                        </div>
                    </div>   
                </div>
                <div className='Drinks-Category-Card'>   
                    <div className='Drinks-Card-Info'>
                        <div className='Drinks-Card-Img Drinks-Category-Image'>
                            <img  src={Smoothies} alt="" />
                            <p className='Drinks-Card-Title'>Smoothies</p>
                        </div>
                    </div>   
                </div>
                <div className='Drinks-Category-Card'>   
                    <div className='Drinks-Card-Info'>
                        <div className='Drinks-Card-Img'>
                            <img src={ProteinShakes} alt="" />
                            <p className='Drinks-Card-Title'>Protein Shakes</p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Drinks;