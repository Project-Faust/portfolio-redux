import React, { useState } from "react";
import { projects } from "../data";

export default function Projects() {
    const project = useState(projects);
    return (
        <div>
            {project.map((res) => (
                <div className="project">
                    <div className="projectText">
                        <a href={res.deployed} target="_blank" rel="noreferrer">
                            <h2>{res.title}</h2>
                        </a>
                        <p className="projectDescription">{res.description}
                            <a className="githubLink" href={res.repository} target="_blank">Repository</a>
                        </p>
                    </div>
                    <a className="projectImageAnchor"
                        href={res.deployed}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={res.image}
                            alt="preview"
                            className="projectImage" />
                    </a>
                </div>
            ))}
        </div>
    )
};