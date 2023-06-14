import React from "react";
import "./index.css"
import GitHub from "../../assets/images/github-mark.png";
import LinkedIn from "../../assets/images/LI-In-Bug.png";

export default function Footer() {
    return (
        <footer
            id="footer"
            className="d-flex border-top align-items-center justify-content-center bg-light mt-3">
            <a
                className="mx-3 my-1"
                href="https://github.com/Project_faust"
            >
                <img
                    src={GitHub}
                    target="_blank"
                    rel="noreferrer"
                    className="footerImage"
                    alt="GitHub"
                ></img>
            </a>
            <a
                className="mx-3 my-1"
                href="https://www.linkedin.com/in/richie-lollis-042bb0235/"
            >
                <img
                    src={LinkedIn}
                    target="_blank"
                    rel="norefferer"
                    alt="LinkedIn"
                    className="footerImage"
                />
            </a>
        </footer>
    );
}