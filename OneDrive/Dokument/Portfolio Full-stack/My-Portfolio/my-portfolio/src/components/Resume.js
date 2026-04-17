import React from "react";
import styles from "../styles/Resume.module.css";

function Resume() {
  return (
    <section className={`${styles.resume} ${styles.animateResume}`}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Sebastian Perez Betancur</p>
        <h2 className={styles.title}>Forged by discipline.</h2>
        <h2 className={styles.titleAccent}>Driven by purpose.</h2>
        <h2 className={styles.title}>Built to ship.</h2>
        <p className={styles.subtitle}>
          From the pitch to the terminal — every rep, every commit, every
          campaign counts.
        </p>
        <div className={styles.buttonContainer}>
          <a
            href="/Sebastian_Perez_CV_EN_DEFINITIVO.docx"
            className={styles.btnPrimary}
            download
          >
            Download CV — English
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
