import React from "react";
import "./Footer.css";
import logo from "../../assets/images/Logo (1).png";
import footerImg1 from "../../assets/images/pngegg (36) 1.png";
import footerImg2 from "../../assets/images/Vector.png";
import location from "../../assets/images/footer-icon/Location.png";
import glob from "../../assets/images/footer-icon/Globe.png";
import fb from "../../assets/images/footer-icon/Facebook.png";
import twitter from "../../assets/images/footer-icon/Twitter.png";
import mail from "../../assets/images/footer-icon/Mail.png";
import insta from "../../assets/images/footer-icon/Instagram.png";
import footerImg3 from "../../assets/images/footer-icon/image 1.png";
import logo2 from "../../assets/images/footer-icon/Logo (1).png";
import Button from '../Button/Button';

const Footer = () => {
  return (
    <div className="Footer-section">
      <div className="Footer-Container">
        <div>
          <img src={logo} alt="" />
          <p className="Footer-Left-Desc">
            We collect the best quapty of ingredients From <br /> market. With
            the best execution we provide our guest <br /> fresh & very Depcious
            Food.
          </p>
          <div className="Footer-Container-Left">
            <div>
              <h3 className="footer-location-title">Our Location</h3>
              <div className="footer-location">
                <img src={location} alt="" />
                <p>
                  Above It <br />
                  House# 20, Road# 09 Sector# 11, <br />
                  Dhaka 1230
                </p>
              </div>
              <div className="footer-map">
                <img src={glob} alt="" />
                <p>Find Us on map</p>
              </div>
            </div>
            <div>
              <img src={footerImg1} alt="" />
            </div>
          </div>
        </div>
        <div className="Footer-Container-Right">
          <div className="Footer-Container-Right-Top">
            <div>
              <h3>Company</h3>
              <div>
                <p>About us</p>
                <p>Community</p>
                <p>Careers</p>
                <p>Privacy Popcy</p>
              </div>
            </div>
            <div>
              <h3>Menu</h3>
              <div>
                <p>Coffee</p>
                <p>Drinks</p>
                <p>Food Items</p>
              </div>
            </div>
            <div>
            <h3>Keep In touch</h3>
              <div>
                <p>E-mail Us</p>
                <p>Text us</p>
                <p>(406) 555-0120</p>
              </div>
            </div>
            <div>
            <h3>Reservation</h3>
              <div>
                <p>Reservations are available for dinner, starting at 3pm each <br /> day</p>
            
              </div>
            </div>
          </div>
          <div className="Footer-Container-Right-Bottom">
            <div>
                <img src={footerImg3} alt="" />
            </div>
            <div className="Footer-Social">
                <img src={fb} alt="" />
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
                <img src={mail} alt="" />
            </div>
          </div>
        </div>
      </div>

            {/* Footer popup */}

      <div className="Footer-Popup-Container">
      <img src={logo2} alt="" />
      <div className="Footer-Popup">
        <div>
            <p className="text1">Sign Up For Emails</p>
            <h3 className="text2">Get 10%</h3>
            <h3 className="text3">OFF</h3>
            <div>
                <p><input className='Footer-Popup-Input' type="text" placeholder='Your E-Mail'/></p>
                <Button>Confirm Your Table</Button>  
            </div>
        </div>
        <div>
        <img src={footerImg2} alt="" />
        </div>
      </div>
      </div>

            {/* Footer footer */}

      <p className="footer-footer">
        Privacy Policy / Cookie policy / All rights reserved. Coffee Address
        2019
      </p>
    </div>
  );
};

export default Footer;
