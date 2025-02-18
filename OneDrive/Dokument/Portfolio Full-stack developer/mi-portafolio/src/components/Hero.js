import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero text-center">
      <img
        src="/images/your-photo.jpg"
        alt="Your Name"
        className="profile-pic"
      />
      <h1>Your Name</h1>
      <p>Full-Stack Developer | JavaScript | Python | React | Django</p>

      <div className="buttons">
        <Link to="/projects" className="btn btn-primary">
          Projects
        </Link>
        <Link to="/small-projects" className="btn btn-secondary">
          Small Projects
        </Link>
        <Link to="/contact" className="btn btn-dark">
          Contact
        </Link>
      </div>
    </section>
  );
}

export default Hero;
