import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SmallProjects from "./components/SmallProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/small-projects" element={<SmallProjects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
