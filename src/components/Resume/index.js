import React from "react";
import "./index.css";
// import { skills } from "../../data.js";
import ResumePDF from "../../assets/files/resume2024.pdf";

export default function Skills() {
    return (
        <section id="resumeSection">
            {/* <div className="skillHeader text-center m-2">
                <h1>Skills</h1>
                <p>Here is a list of skills and other technologies that I have proficiency with.</p>
            </div> */}
            <div className="pdfContainer text-center">
                <iframe className="pdfViewer " src={ResumePDF} title="Resume PDF" width="100%" height="100%"></iframe>
            </div>
            {/* <div className="skillContainer text-center">
                {skills.map((res) => (
                    <p key={res.name} className="mb-3">
                        <span>
                            <strong>{res.name}</strong>
                        </span>
                    </p>
                ))}
            </div> */}
        </section>
    );
}
