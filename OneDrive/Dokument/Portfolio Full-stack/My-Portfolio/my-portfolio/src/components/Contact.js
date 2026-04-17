import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Open to fullstack, growth, or hybrid roles — remote or relocation.
          </p>
        </div>

        {submitted ? (
          <div className={styles.success}>
            <span className={styles.successIcon}>✓</span>
            <p>Message sent! I'll get back to you soon.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input
                className={styles.input}
                id="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                id="message"
                placeholder="What's on your mind?"
                rows="5"
                required
              ></textarea>
            </div>

            <button className={styles.btn} type="submit">
              Send Message
            </button>
          </form>
        )}

        <div className={styles.info}>
          <a href="mailto:sebbepebe27@gmail.com" className={styles.infoLink}>
            sebbepebe27@gmail.com
          </a>
          <span className={styles.divider}>·</span>
          <a
            href="https://github.com/LionelWise77"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoLink}
          >
            GitHub
          </a>
          <span className={styles.divider}>·</span>
          <a
            href="https://www.linkedin.com/in/sebastian-perez-betancur-a777a0212/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoLink}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
