
// src header.js

import React from 'react';
import logo1 from './logo1.jpg';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <h1> Employees </h1>
            <img className="img1" alt="logo" src = {logo1} />
        </div>
    )
}

export default Header