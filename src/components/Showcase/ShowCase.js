import React from 'react';
import './ShowCase.css';
import a from "../../assets/images/SHOWCASE/Group 116.png";
import b from "../../assets/images/SHOWCASE/Rectangle 12.png";
import c from "../../assets/images/SHOWCASE/Rectangle 13.png";

const ShowCase = () => {
    return (
        <div className='ShowCase-Container'>
            <img src={c} alt="" />
            <img src={a} alt="" />
            <img src={b} alt="" />
        </div>
    );
};

export default ShowCase;