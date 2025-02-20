import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Hero.module.css"; // Importamos los estilos
import images from "../assets/images/profilpic.jpg";

function Hero() {
  return (
    <section className={styles.hero}>
      <img src={images} alt="Your Name" className="profile-pic" />
      <h1>
        Sebastian
        <br />
        Perez Betancur
      </h1>
      <p>
        Full-Stack Developer
        <br />
        JavaScript | Python | React | Django
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
        <Link to="/contact" className={`${styles.button} ${styles.dark}`}>
          Contact
        </Link>
      </div>
    </section>
  );
}

export default Hero;
