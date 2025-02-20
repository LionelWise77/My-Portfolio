import React from "react";
import styles from "../styles/Resume.module.css";

function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <h2 className="text-center">My Resume</h2>
      <p className="text-center">
        Download my resume by clicking the button below:
      </p>
      <div className="text-center">
        <a href="/resume.pdf" className="btn btn-primary" download>
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}

export default Resume;
