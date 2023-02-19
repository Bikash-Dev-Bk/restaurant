import React from "react";
import "./Quotes.css";
import cafe from "../../../assets/images/cafe.png";
import QuoteBottom from "../../../assets/images/Quote/Quote bottom.png";
import QuoteTop from "../../../assets/images/Quote/Quote top.png";

const Quotes = () => {
  return (
    <div className="Quotes-Container">
      
        <div className="Top">
          <img src={QuoteTop} alt="" />
        </div>
        <h3 className="Quotes-title">
          Coffee is a way of stealing time <br /> which should by rights belong
          to <br /> your older self.
        </h3>
        <img src={QuoteBottom} alt="" />
      
      <div className="Quotes-Img">
        <img src={cafe} alt="" />
      </div>
    </div>
  );
};

export default Quotes;
