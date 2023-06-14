import React from "react";

export default function About() {
    return (
        <section className="row m-3 text-center">
            <h1>About Me</h1>
            <div className="col-md-6 d-flex container-fluid align-items-center justify-content-center p-3">
                <p className="font-monospace">My name is Cody Lane Pentecost, but please feel free to refer to me by my middle
                    name, Lane. I have lived in North Carolina near the Charlotte area for all of my life. I have working experience
                    in a number of fields including banking, dental, freight, medical, and sales as well as personal interests in automotive, computer hardware, and film. I have finally
                    decided to take the plunge and fulfill my dream of becoming a software developer. My family owns a
                    small business, and I look forward to using my newfound skills to help further what we do and
                    present a good looking, functional webpage for the community we service.</p>
            </div>
            <div className="col-md-6 d-flex">
                <img src={require("../../assets/images/nhra-head-lane.jpg")}
                    alt="NHRA"
                    className="aboutImage img-fluid m-3 align-items-center"
                />
            </div>
        </section>
    )
};