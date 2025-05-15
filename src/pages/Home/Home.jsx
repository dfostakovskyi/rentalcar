//rentalcar\src\pages\Home\Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Find your perfect rental car</h1>
          <p className={styles.description}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <Link to="/catalog" className={styles.styledButton}>
            View Catalog
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
