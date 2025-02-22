import React from "react";
import styles from "../styles/Resume.module.css";

function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <h2>My Resume</h2>
      <p>Download my resume in your preferred language:</p>
      <div className={styles.buttonContainer}>
        <a
          href="/ResumeSvenska.pdf"
          className={`btn btn-primary ${styles.button}`}
          download
        >
          Download Resume (Swedish)
        </a>
        <a
          href="/ResumeEnglish.pdf"
          className={`btn btn-secondary ${styles.button}`}
          download
        >
          Download Resume (English)
        </a>
      </div>
    </section>
  );
}

export default Resume;
