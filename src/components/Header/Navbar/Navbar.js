import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='header'>
            <div className='header-name'>
                <h1>Mr. Cafe</h1>
            </div>
            <div >
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contacts">Contacts</a>
            </div>
        </nav>
    );
};

export default Navbar;