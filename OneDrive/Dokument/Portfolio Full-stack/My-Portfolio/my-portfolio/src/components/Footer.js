import React from "react";
import styles from "../styles/Footer.module.css"; // Importamos los estilos

function Footer() {
  return (
    <footer
      className={`footer bg-dark text-white text-center py-3 ${styles.footer}`}
    >
      <p>© 2025 Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
