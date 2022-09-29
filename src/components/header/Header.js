
import React from 'react';
import logo from '../../images/Logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <h1>Fitness Active Club</h1>
        </div>
    );
};

export default Header;