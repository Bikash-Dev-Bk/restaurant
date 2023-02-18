import React from "react";
import "./PopularFood.css";
import grilledLamb from "../../assets/images/Popular food/pngegg (20).png";
import burger from "../../assets/images/Popular food/pngegg (22).png";
import pizza from "../../assets/images/Popular food/pngegg (23).png";
import Button from "../Button/Button";
import { FaStar, FaCartArrowDown } from "react-icons/fa";

const PopularFood = () => {
  return (
    <div className="Foods-Container">
      <h2 className="Foods-Header">Our Foods for Foodies</h2>
      <p className="Foods-Desc">
        We collect the best quality of ingredients From market. With the best{" "}
        <br></br>
        execution we provide our guest fresh & very Delicious Food.
      </p>
      <div className="Meal-Container">
        <div className="Meal">
          <div className="Meal-Header">
            <div>
              <Button>$50</Button>
              <h2 className="Golden-Color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </h2>
            </div>
            <div className="Meal-img">
              <img src={grilledLamb} alt="" />
            </div>
          </div>
          <div className="Meal-Info">
            <h3 className="Meal-Title">Iced Latte Vertical</h3>
            <p className="Meal-Desc">
              Espresso, Milk, Ice and Choice of <br /> Flavor(s) - 20oz
            </p>
          </div>
          <div className="Foods-Footer">
            <p>
              <span className="Golden-Color">10%</span> Off for new Customer
            </p>
            <Button>
              {" "}
              <FaCartArrowDown /> Add
            </Button>
          </div>
        </div>
        <div className="Meal">
          <div className="Meal-Header">
            <div>
              <Button>$50</Button>
              <h2 className="Golden-Color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </h2>
            </div>
            <div className="Meal-img">
              <img src={pizza} alt="" />
            </div>
          </div>
          <div className="Meal-Info">
            <h3 className="Meal-Title">Iced Latte Vertical</h3>
            <p className="Meal-Desc">
              Espresso, Milk, Ice and Choice of <br /> Flavor(s) - 20oz
            </p>
          </div>
          <div className="Foods-Footer">
            <p>
              <span className="Golden-Color">10%</span> Off for new Customer
            </p>
            <Button>
              {" "}
              <FaCartArrowDown /> Add
            </Button>
          </div>
        </div>
        <div className="Meal">
          <div className="Meal-Header">
            <div>
              <Button>$50</Button>
              <h2 className="Golden-Color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </h2>
            </div>
            <div className="Meal-img">
              <img src={burger} alt="" />
            </div>
          </div>
          <div className="Meal-Info">
            <h3 className="Meal-Title">Iced Latte Vertical</h3>
            <p className="Meal-Desc">
              Espresso, Milk, Ice and Choice of <br /> Flavor(s) - 20oz
            </p>
          </div>
          <div className="Foods-Footer">
            <p>
              <span className="Golden-Color">10%</span> Off for new Customer
            </p>
            <Button>
              {" "}
              <FaCartArrowDown /> Add
            </Button>
          </div>
        </div>

        <div className="Meal">
          <div className="Meal-Header">
            <div>
              <Button>$50</Button>
              <h2 className="Golden-Color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </h2>
            </div>
            <div className="Meal-img">
              <img src={grilledLamb} alt="" />
            </div>
          </div>
          <div className="Meal-Info">
            <h3 className="Meal-Title">Iced Latte Vertical</h3>
            <p className="Meal-Desc">
              Espresso, Milk, Ice and Choice of <br /> Flavor(s) - 20oz
            </p>
          </div>
          <div className="Foods-Footer">
            <p>
              <span className="Golden-Color">10%</span> Off for new Customer
            </p>
            <Button>
              {" "}
              <FaCartArrowDown /> Add
            </Button>
          </div>
        </div>
        <div className="Meal">
          <div className="Meal-Header">
            <div>
              <Button>$50</Button>
              <h2 className="Golden-Color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </h2>
            </div>
            <div className="Meal-img">
              <img src={pizza} alt="" />
            </div>
          </div>
          <div className="Meal-Info">
            <h3 className="Meal-Title">Iced Latte Vertical</h3>
            <p className="Meal-Desc">
              Espresso, Milk, Ice and Choice of <br /> Flavor(s) - 20oz
            </p>
          </div>
          <div className="Foods-Footer">
            <p>
              <span className="Golden-Color">10%</span> Off for new Customer
            </p>
            <Button>
              {" "}
              <FaCartArrowDown /> Add
            </Button>
          </div>
        </div>
        <div className="Meal">
          <div className="Meal-Header">
            <div>
              <Button>$50</Button>
              <h2 className="Golden-Color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </h2>
            </div>
            <div className="Meal-img">
              <img src={burger} alt="" />
            </div>
          </div>
          <div className="Meal-Info">
            <h3 className="Meal-Title">Iced Latte Vertical</h3>
            <p className="Meal-Desc">
              Espresso, Milk, Ice and Choice of <br /> Flavor(s) - 20oz
            </p>
          </div>
          <div className="Foods-Footer">
            <p>
              <span className="Golden-Color">10%</span> Off for new Customer
            </p>
            <Button>
              <FaCartArrowDown /> Add
            </Button>
          </div>
        </div>
      </div>
      <div className="Button-SeeAll">
        <Button>See All</Button>
      </div>
    </div>
  );
};

export default PopularFood;
