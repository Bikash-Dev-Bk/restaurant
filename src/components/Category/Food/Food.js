import React from 'react';
import './Food.css';
import Meat from "../../../assets/images/Category/Food/pngegg (29).png";
import Sides from "../../../assets/images/Category/Food/pngegg (30).png";
import ChickenItems from "../../../assets/images/Category/Food/pngegg (31) 1.png";

const Food = () => {
    return (
        <div className='Food-Section'>
            <h2 className='Food-Category-Title'>Food</h2>
            <div className='Food-Category-Container'>
                <div className='Food-Category-Card'>   
                    <div className='Food-Card-Info'>
                        <div className='Food-Card-Img'>
                            <img src={Meat} alt="" />
                            <p className='Food-Card-Title'>Meat Lovers</p>
                        </div>
                    </div>   
                </div>
                <div className='Food-Category-Card'>   
                    <div className='Food-Card-Info'>
                        <div className='Food-Card-Img'>
                            <img src={Sides} alt="" />
                            <p className='Food-Card-Title'>Sides</p>
                        </div>
                    </div>   
                </div>
                <div className='Food-Category-Card'>   
                    <div className='Food-Card-Info'>
                        <div className='Food-Card-Img'>
                            <img src={ChickenItems} alt="" />
                            <p className='Food-Card-Title'>Chicken Items</p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Food;