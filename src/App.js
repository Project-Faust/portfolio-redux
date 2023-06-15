import React, { useState } from "react";
import About from "./components/About/index.js";
import Contact from "./components/Contact/index.js";
import Navbar from "./components/Navbar/index.js";
import Projects from "./components/Projects/index.js";
import Skills from "./components/Resume/index.js";
import Footer from "./components/Footer/index.js";
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
      <main id="mainContainer">
        {currentNav === navLinks[0] && <About></About>}
        {currentNav === navLinks[1] && <Projects></Projects>}
        {currentNav === navLinks[2] && <Skills></Skills>}
        {currentNav === navLinks[3] && <Contact></Contact>}
      </main>
      <Footer></Footer>
    </div>
  );
};