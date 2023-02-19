import React from "react";
import "./PopularDrinks.css";
import drinks from "../../assets/images/drinks.png";
import Button from "../Button/Button";
import { FaStar ,FaCartArrowDown} from 'react-icons/fa';

const PopularDrinks = () => {
  return (
    <div className="Drinks-Container">
      <h2 className="Drinks-Header">Our Most Popular Coffee</h2>
      <div className="Coffee-Container">
        
        <div className="Coffee">
          <div className="Coffee-Header">
            <div>
              <Button>$50</Button>
              <h2 className="Golden-Color"><FaStar /><FaStar /><FaStar /><FaStar /> </h2>
            </div>
            <div className="Coffee-img">
              <img src={drinks} alt="" />
            </div>
          </div>
          <div className="Coffee-Info">
            <h3 className="Coffee-Title">Iced Latte Vertical</h3>
            <p className="Coffee-Desc">
              Espresso, Milk, Ice and Choice of <br /> Flavor(s) - 20oz
            </p>
          </div>
          <div className="Drinks-Footer">
            <p className="Drinks-Footer-p"><span className="Golden-Color">10%</span> Off for new Customer</p>
            <Button> <FaCartArrowDown/> Add</Button>
          </div>
        </div>

        <div className="Coffee">
          <div className="Coffee-Header">
            <div>
              <Button>$50</Button>
              <h2 className="Golden-Color"><FaStar /><FaStar /><FaStar /><FaStar /> </h2>
            </div>
            <div className="Coffee-img">
              <img src={drinks} alt="" />
            </div>
          </div>
          <div className="Coffee-Info">
            <h3 className="Coffee-Title">Skinny Latte</h3>
            <p className="Coffee-Desc">
              Espresso, Milk, Ice and Choice of <br /> Flavor(s) - 20oz
            </p>
          </div>
          <div className="Drinks-Footer">
            <p><span className="Golden-Color">10%</span> Off for new Customer</p>
            <Button> <FaCartArrowDown/> Add</Button>
          </div>
        </div>

        <div className="Coffee">
          <div className="Coffee-Header">
            <div>
              <Button>$50</Button>
              <h2 className="Golden-Color"><FaStar /> <FaStar /> <FaStar /> <FaStar /> </h2>
            </div>
            <div className="Coffee-img">
              <img src={drinks} alt="" />
            </div>
          </div>
          <div className="Coffee-Info">
            <h3 className="Coffee-Title">Cappuccino</h3>
            <p className="Coffee-Desc">
              Espresso, Milk, Ice and Choice of <br /> Flavor(s) - 20oz
            </p>
          </div>
          <div className="Drinks-Footer">
            <p><span className="Golden-Color">10%</span> Off for new Customer</p>
            <Button> <FaCartArrowDown/> Add</Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopularDrinks;
