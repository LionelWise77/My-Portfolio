import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.logo}>
            SPB<span className={styles.dot}>.</span>
          </span>
          <span className={styles.tagline}>
            Fullstack Developer · Growth Marketer
          </span>
        </div>

        <div className={styles.links}>
          <a
            href="https://github.com/LionelWise77"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sebastian-perez-betancur"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a href="mailto:sebbepebe27@gmail.com" className={styles.link}>
            Email
          </a>
        </div>

        <div className={styles.right}>
          <span className={styles.copy}>© 2025 Sebastian Perez Betancur</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
