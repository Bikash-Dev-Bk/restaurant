import React from 'react';
import './Offer.css';
import OfferImg1 from "../../assets/images/offer/Frame 12 (1).png";
import OfferImg2 from "../../assets/images/offer/Frame 13.png";
import OfferImg3 from "../../assets/images/offer/Frame 14.png";

const Offer = () => {
    return (
        <div className='Offer-Container'>
            <img src={OfferImg1} alt="" />
            <img src={OfferImg2} alt="" />
            <img src={OfferImg3} alt="" />
        </div>
    );
};

export default Offer;