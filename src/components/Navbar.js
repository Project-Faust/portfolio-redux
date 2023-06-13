import React from "react";

export default function Navbar(props) {
    const { navLinks = [], currentLink, setCurrentLink } = props;
    return (
        <ul className="nav nav-tabs justify-content-center">
            {navLinks.map((navLink) => (
                <li key={navLink.name} className="nav-item">
                    <a
                        className={`nav-link ${currentLink === navLink ? 'active' : ''}`}
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