import React from "react";
import styles from "../styles/Contact.module.css"; // Importamos los estilos

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Me</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className={styles.contactInfo}>
          <p>Email: Sebbepebe27@gmail.com</p>
          <p>Telefonnummer: 0708920799</p>
          <p>
            <a
              href="https://github.com/LionelWise77"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |
            <a
              href="https://www.linkedin.com/in/sebastian-perez-betancur-a777a0212/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
