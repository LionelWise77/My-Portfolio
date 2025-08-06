import React from "react";
import styles from "../styles/Resume.module.css";

function Resume() {
  return (
    <section id="resume" className={`${styles.resume} ${styles.animateResume}`}>
      <h2>My Resume</h2>
      <p className={styles.subtitle}>
        Building bridges between code, creativity and purpose.
      </p>

      <div className={styles.buttonContainer}>
        <a
          href="/CV-FullStack-Definitive.pdf"
          className={`btn btn-primary ${styles.button}`}
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
