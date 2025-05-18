//src\pages\CarDetails\CarDetails.jsx

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./CarDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOneCar } from "../../redux/slices/oneCarSlice";
import { Circles } from "react-loader-spinner";
import CarImage from "../../components/CarImage/CarImage";
import CarData from "../../components/CarData/CarData";
import BookingSection from "../../components/BookingSection/BookingSection";
import InformationSection from "../../components/InformationSection/InformationSection";

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCar = useSelector((state) => state.oneCar.selectedCar);
  const status = useSelector((state) => state.oneCar.status);
  const error = useSelector((state) => state.oneCar.error);

  useEffect(() => {
    dispatch(getOneCar(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.loaderContainer}>
          <Circles color="#3470FF" height={80} width={80} ariaLabel="loading" />
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className={styles.container}>
        <Header />
        <div>Loading error: {error}</div>
      </div>
    );
  }

  if (!selectedCar) {
    return (
      <div className={styles.container}>
        <Header />
        <div>Car not found.</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.containerGrid}>
        <div className={styles.carImage}>
          <CarImage car={selectedCar} />
        </div>
        <div className={styles.carData}>
          <CarData car={selectedCar} />
        </div>
        <div className={styles.booking}>
          <BookingSection car={selectedCar} />
        </div>
        <div className={styles.information}>
          <InformationSection car={selectedCar} />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
