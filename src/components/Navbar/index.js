import React from "react";
import "./index.css"

export default function Navbar({ navLinks = [], currentLink, setCurrentLink }) {
    return (
        <ul id="navbarContainer" className="nav nav-tabs sticky-top justify-content-center bg-light">
            {navLinks.map((navLink) => (
                <li key={navLink.name} className="nav-item">
                    <a
                        className={`nav-link text-dark ${currentLink === navLink ? 'active' : ''}`}
                        href={navLink.url}
                        onClick={() => {
                            setCurrentLink(navLink);
                        }}
                    >
                        {navLink.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};