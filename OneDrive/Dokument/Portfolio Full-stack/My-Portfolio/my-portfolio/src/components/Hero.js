import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Hero.module.css"; // Importamos los estilos

function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src="/images/your-photo.jpg"
        alt="Your Name"
        className={styles.profilePic}
      />
      <h1>Sebastian Perez Betancur</h1>
      <p>Full-Stack Developer | JavaScript | Python | React | Django</p>

      <div className={styles.buttons}>
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
