import React from "react";
import "./index.css";
import ResumePDF from "../../assets/files/resume.webp";

export default function Skills() {
    return (
        <section id="resume"
            className="row text-center mw-100 mh-100">
            <div className="">
                <img
                    src={ResumePDF}
                    alt="resume"
                    className="col-lg-6 col-md-12 border border-3 border-dark m-3 p-0 mw-100" />
            </div>
        </section>
    );
}
