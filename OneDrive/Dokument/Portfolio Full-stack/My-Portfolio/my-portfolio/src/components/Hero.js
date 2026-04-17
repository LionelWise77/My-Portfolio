import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Hero.module.css";
import profilePic from "../assets/images/profilpic.jpg";

function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src={profilePic}
        alt="Sebastian Perez Betancur"
        className={styles.profilePic}
      />
      <h1 className={styles.name}>Sebastián Perez Betancur</h1>
      <h2 className={styles.role}>Fullstack Developer · Growth Marketer</h2>
      <p className={styles.stack}>
        React · Django · Node.js · Customer.io · Figma
      </p>
      <p className={styles.description}>
        I build and ship digital products — from React apps and automation
        workflows to marketing campaigns and client websites.
      </p>
      <div className={styles.buttons}>
        <Link to="/projects" className={`${styles.button} ${styles.primary}`}>
          Projects
        </Link>
        <Link to="/about" className={`${styles.button} ${styles.secondary}`}>
          About Me
        </Link>
        <Link
          to="/small-projects"
          className={`${styles.button} ${styles.dark}`}
        >
          More
        </Link>
        <Link to="/contact" className={`${styles.button} ${styles.dark}`}>
          Contact
        </Link>
      </div>
    </section>
  );
}

export default Hero;
