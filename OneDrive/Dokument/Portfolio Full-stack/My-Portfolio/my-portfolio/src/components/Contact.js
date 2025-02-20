import React from "react";
import styles from "../styles/Contact.module.css"; // Importamos los estilos

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <p>Email: your.email@example.com</p>
      <p>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          LinkedIn
        </a>
      </p>
    </section>
  );
}

export default Contact;
