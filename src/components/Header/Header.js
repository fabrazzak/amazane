import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <ul>
                <li><a href="#">Order</a></li>
                <li><a href="#">Order Review</a></li>
                <li><a href="#">Manage Inventory</a></li>
            </ul>
        </div>
    );
};

export default Header;