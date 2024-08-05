import React, { useState } from 'react';
import "../NavBar/index.css";
import profile from "../../assets/boy.png";

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleProfileClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <a href="#" onClick={handleProfileClick}>
                        <img className="img-nav" src={profile} alt="Profile" />
                    </a>
                    {menuOpen && (
                        <ul className="dropdown-menu">
                            <li>
                                <a href="#logout">Logout</a>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};
