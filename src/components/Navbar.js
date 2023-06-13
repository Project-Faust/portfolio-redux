import React from "react";

export default function Navbar() {
    return (
        <ul class="nav nav-tabs justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contac">Contact</a>
            </li>
        </ul>
    )
};