import React from 'react';
import './Reservation.css';
import a from "../../assets/images/RESERVATION/Group 153.png";
import b from "../../assets/images/RESERVATION/Rectangle 14.png";
import c from "../../assets/images/RESERVATION/Rectangle 15.png";
import d from "../../assets/images/RESERVATION/IMAGE.png";
import Button from '../Button/Button';

const Reservation = () => {
    return (
        <div className='Reservation-Container'>
            
            <div>
                <img src={b} alt="" />
                <p className='Reservation-Card-Title'>Rest, Relax & Revive!</p>
                <p className='Reservation-Card-Desc'>At Vertical people come from all around to rest, relax and revive with good coffee, good company, and great food!</p>
                <div className='Bottom-Image'>
                <img  src={d} alt="" />
                </div>
            </div>
            <div>
                <img src={c} alt="" />
                <p className='Reservation-Card-Title'>Did Someone Say “Coffee”</p>
                <p className='Reservation-Card-Desc'>We offer some of the best locally roasted coffee using “Brazilian Santos” beans. Enjoy Dark, Blonde, Jamaican, Italian & Decaf roasts. Also available are our specialty Lattes, Frappes, Mochas, Cappuccinos, Americanos & more …</p>
            </div>
            <div>
                <img src={a} alt="" />
                <div  className='Book-Button'>
                <Button>Book Your Table</Button>
                </div>
            </div>
        </div>
    );
};

export default Reservation;