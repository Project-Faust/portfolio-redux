import React from "react";
import "./index.css"
import GitHub from "../../assets/images/github-mark.png";
import LinkedIn from "../../assets/images/LI-In-Bug.png";

export default function Footer() {
    return (
        <footer
            id="footer"
            className="d-flex border-top align-items-center justify-content-center sticky-bottom bg-light mt-3">
            <a
                className="mx-3 my-1"
                href="https://github.com/Project-faust"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={GitHub}
                    alt="GitHub"
                    className="footerImage"
                ></img>
            </a>
            <a
                className="mx-3 my-1"
                href="https://www.linkedin.com/in/cody-pentecost-a2a363a6"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    className="footerImage"
                />
            </a>
        </footer>
    );
}