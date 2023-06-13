import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './App.css';

export default function App() {
  const [navLinks] = useState([
    { name: "About" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" }
  ]);

  const [currentNav, setCurrentNav] = useState(navLinks[0]);

  return (
    <div>
      <Navbar
        navLinks={navLinks}
        currentLink={currentNav}
        setCurrentLink={setCurrentNav}
      />
      <main>
        {currentNav === navLinks[0] && <About></About>}
        {currentNav === navLinks[1] && <Projects></Projects>}
        {currentNav === navLinks[2] && <Skills></Skills>}
        {currentNav === navLinks[3] && <Contact></Contact>}
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
};