import React from "react";
import "./CustomerReview.css";
import top from "../../assets/images/Quote/Quote top.png";
import bottom from "../../assets/images/Quote/Quote bottom.png";
import cup from "../../assets/images/cup.png";
import fb from "../../assets/images/Review/Facebook.png";
import mail from "../../assets/images/Review/Mail.png";
import twitter from "../../assets/images/Review/Twitter.png";
import verify from "../../assets/images/Review/Verified Account.png";
import { FaStar } from "react-icons/fa";

const CustomerReview = () => {
  return (
    <div className="Review-Container">
      <div>
        <h2 className="Review-Title">What Our Customer Say</h2>
        <div>
          <img src={top} alt="" />
        </div>
        <h3 className="Review-Text">
          I Like The Coffee But A Little Expensive To recommend To <br />{" "}
          Friends. Can Buy Acceptable Equivalent In Waitrose For <br /> Half The
          Price
        </h3>
        <img src={bottom} alt="" />
        <p className="Reviewer">Esther Howard</p>
        <div className="Review-Stars">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
        </div>
        <div className="Review-Footer">
          <div className="Verify">
            <img src={verify} alt="" />
            <p>Verified Customer</p>
          </div>
          <div className="Social-Icon">
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={mail} alt="" />
          </div>
        </div>
      </div>
      <div>
        <img src={cup} alt="" />
      </div>
    </div>
  );
};

export default CustomerReview;
