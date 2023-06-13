import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <div>
            {projects.map((res) => (
                <div className="projectContainer text-center m-2">
                    <div className="projectText">
                        <a href={res.deployed} target="_blank" rel="noreferrer">
                            <h2>{res.title}</h2>
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
                        </a>
                        <p className="projectDescription">{res.description}
                            <br />
                            <a className="githubLink" href={res.repository}
                                target="_blank"
                                rel="noreferrer">Repository</a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
};