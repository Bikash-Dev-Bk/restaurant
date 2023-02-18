import React from 'react';
import './CustomerReview.css';
import top from "../../assets/images/Quote/Quote top.png";
import bottom from "../../assets/images/Quote/Quote bottom.png";
import cup from "../../assets/images/cup.png";

const CustomerReview = () => {
    return (
        <div className='Review-Container'>
            <div>
                <h2 className='Review-Title'>What Our Customer Say</h2>
                {/* <img src={top} alt="" /> */}
                <p className='Review-Text'><img src={top} alt="" />I Like The Coffee But A Little Expensive To  recommend To <br /> Friends. Can Buy Acceptable Equivalent In Waitrose For <br /> Half The Price<img src={bottom} alt="" /></p>
                {/* <img src={bottom} alt="" /> */}
            </div>
            <div>
                <img src={cup} alt="" />
            </div>
            
        </div>
    );
};

export default CustomerReview;