import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section>
            <div className="projectsHeader text-center m-2">
                <h1>Projects</h1>
                <p>Listed below are some projects I have created or contributed to.</p>
            </div>
            {projects.map((res) => (
                <div className="projectContainer text-center m-2 border-top">
                    <div className="projectText">
                        <a className="text-decoration-none" href={res.deployed} target="_blank" rel="noreferrer">
                            <h2 className="">{res.title}</h2>
                            <a className="projectImageAnchor"
                                href={res.deployed}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={res.image}
                                    alt="preview"
                                    className="projectImage img-fluid" />
                            </a>
                        </a>
                        <p className="projectDescription">{res.description}
                            <br />
                            <a className="githubLink text-decoration-none" href={res.repository}
                                target="_blank"
                                rel="noreferrer">GitHub Repository</a>
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
};