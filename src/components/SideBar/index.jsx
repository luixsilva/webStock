import React from 'react';
// import { Link } from 'react-router-dom';
import "../SideBar"

const SideBar = () => {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default SideBar;
