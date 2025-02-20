import React from "react";
import styles from "../styles/Resume.module.css";

function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <h2>My Resume</h2>
      <p>Download my resume by clicking the button below:</p>
      <a
        href="/resume.pdf"
        className={`btn btn-primary ${styles.button}`}
        download
      >
        Download Resume (PDF)
      </a>
    </section>
  );
}

export default Resume;
