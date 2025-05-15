//rentalcar\src\components\Header\Header.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation(); // Отримуємо поточний шлях

  return (
    <header className={styles.header}>
      <svg className={styles.logo} width="104" height="16">
        <use href="/assets/sprite.svg#Logo"></use>
      </svg>

      <nav className={styles.nav}>
        <Link
          to="/"
          className={`${styles.navLink} ${
            location.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/catalog"
          className={`${styles.navLink} ${
            location.pathname === "/catalog" ? styles.active : ""
          }`}
        >
          Catalog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
