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
        <img
          src="/hero-image.jpg"
          alt="Rental Cars"
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1 className={styles.title}>Орендуй авто легко та швидко!</h1>
          <p className={styles.description}>
            Вибери автомобіль, який підходить тобі.
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
