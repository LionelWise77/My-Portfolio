import React from "react";
import styles from "../styles/AboutMe.module.css";
import profileImg from "../assets/images/profilpic.jpg"; // Opcional si deseas mostrar tu foto aquí

function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            Hello! I'm <strong>Sebastián Pérez Betancur</strong>, a Full-Stack
            Developer passionate about creating clean, responsive and
            user-focused web applications. With a background in React, Django,
            Node.js, and Python, I aim to build solutions that combine
            technology, design, and purpose.
          </p>
          <p>
            My journey is guided by discipline, stoic philosophy, and a deep
            desire to improve people's lives through technology. I believe in
            simplicity, clarity, and continuous learning.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={profileImg}
            alt="Sebastián Pérez Betancur"
            className={styles.profileImg}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
