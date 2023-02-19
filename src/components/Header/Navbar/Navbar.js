import React from "react";
import "./Navbar.css";
import logo from "../../../assets/images/Logo 1.png";
import { FaUser, FaCartArrowDown, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <a href="/home">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Coffee & Drinks</a>
        <a href="/services">Food Menu</a>
        <a href="/services">Reservation</a>
        <a href="/contacts">Contacts Us</a>
      </div>
      <div className="Navbar-Right">
        <div>
          <FaSearch />
        </div>
        <div className="Navbar-icons">
          <p>$ 00.0 / 0</p>
          <FaCartArrowDown />
        </div>
        <div className="Navbar-icons">
          <FaUser />
          <p>Jacob</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
