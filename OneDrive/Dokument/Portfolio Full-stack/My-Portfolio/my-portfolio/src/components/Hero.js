import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Hero.module.css"; // Importamos los estilos
import profilePic from "../assets/images/profilpic.jpg"; // corrige nombre de import si necesario

function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src={profilePic}
        alt="Sebastian Perez Betancur"
        className={styles.profilePic}
      />
      <h1>Sebastián Perez Betancur</h1>
      <h2>Fullstack Developer | React, Django & Node.js</h2>

      <p className={styles.description}>
        I build clean, responsive apps with modern technologies to create
        meaningful digital solutions.
      </p>

      <div className={styles.buttons}>
        <Link to="/projects" className={`${styles.button} ${styles.primary}`}>
          Projects
        </Link>
        <Link
          to="/small-projects"
          className={`${styles.button} ${styles.secondary}`}
        >
          Small Projects
        </Link>
        <Link to="/about" className={`${styles.button} ${styles.primary}`}>
          About Me
        </Link>
        <Link to="/contact" className={`${styles.button} ${styles.dark}`}>
          Contact
        </Link>
      </div>
    </section>
  );
}

export default Hero;
