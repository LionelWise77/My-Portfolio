import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css"; // Importa el CSS Module

function Header() {
  return (
    <nav className={`navbar navbar-dark bg-dark ${styles.navbarCustom}`}>
      <div className="container">
        <Link className={`navbar-brand ${styles.brand}`} to="/">
          HOME
        </Link>
        <Link className="nav-link" to="/resume">
          Resume
        </Link>
      </div>
    </nav>
  );
}

export default Header;
