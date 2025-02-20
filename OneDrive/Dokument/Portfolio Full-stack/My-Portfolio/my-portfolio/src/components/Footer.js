import React from "react";
import styles from "../styles/Footer.module.css"; // Importamos los estilos

function Footer() {
  return (
    <footer className={`footer  text-center py-3 ${styles.footer}`}>
      <h3>© 2025 Sebastian P. All rights reserved.</h3>
    </footer>
  );
}

export default Footer;
