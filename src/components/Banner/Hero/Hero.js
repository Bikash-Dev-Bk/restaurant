import React from "react";
import BannerImg from "../../../assets/images/banner.png";
import Button from "../../Button/Button";
import './Hero.css';

const Hero = () => {
  return (
    <div className="Hero-container">
      <div className="half-width">
        <p className="banner-tag-line">A Best Café House</p>
        <h2 className="banner-title">Start Your Day With Morning Coffee</h2>
        <h4 className="coffee"><span>Colombian Andean coffee</span> <span className="span2">Ethiopian acidic coffee</span></h4>
        <p className="banner-desc">
          We love the idea of indulging in your health, and every <br /> item on our
          menu is full of lush, organic ingredients, bright <br /> flavor and beautiful
          color.
        </p>
        <div >
          <Button>Get Yours Now</Button>
          <button className="banner-btn2">Reservation</button>
        </div>
      </div>
      <div className="half-width">
        <img src={BannerImg} alt="cup" />
      </div>
    </div>
  );
};

export default Hero;
