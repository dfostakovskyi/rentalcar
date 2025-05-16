//rentalcar\src\components\Header\Header.jsx

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/slices/filtersSlice";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCatalogClick = (e) => {
    e.preventDefault();
    dispatch(resetFilters());
    navigate("/catalog", { replace: true });
  };

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
          onClick={handleCatalogClick}
        >
          Catalog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
