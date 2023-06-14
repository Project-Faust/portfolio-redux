import React from "react";
import { skills } from "../../data";

export default function Skills() {
    return (
        <section>
            <div className="skillHeader text-center m-2">
                <h1>Skills</h1>
                <p>Here are a list of skills and other technologies that I have profiency with.</p>
            </div>
            <div className="skillContainer text-center">
                {skills.map((res) => (
                    <div key={res.name} className="mb-3">
                        <span><strong>{res.name}</strong></span>
                    </div>
                ))}
            </div>
        </section>
    )
};