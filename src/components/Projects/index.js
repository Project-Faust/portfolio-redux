import React from "react";
import { projects } from "../../data";

export default function Projects() {
  return (
    <section className="m-3">
      <div className="projectsHeader text-center">
        <h1>Projects</h1>
        <p>Listed below are some applications I have created or contributed to.</p>
      </div>
      {projects.map((res) => (
        <div className="row projectContainer border-top">
          <div className="col-md-6 d-flex align-items-center justify-content-center text-center">
            <div className="projectText">
              <a
                className="text-dark text-decoration-none"
                href={res.deployed}
                target="_blank"
                rel="noreferrer"
              >
                <h2>{res.title}</h2>
                <p>({res.subtitle})</p>
              </a>
              <p className="projectDescription">
                {res.description}
                </p>
                <a
                  className="githubLink text-dark text-decoration-none"
                  href={res.repository}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>GitHub Repository</strong>
                </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <a
              className="projectImageAnchor"
              href={res.deployed}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={res.image}
                alt="preview"
                className="projectImage img-fluid m-3"
              />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
