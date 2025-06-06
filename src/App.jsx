//rentalcar\src\App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import CarDetails from "./pages/CarDetails/CarDetails";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/catalog/:id" element={<CarDetails />} />
  </Routes>
);

export default App;
