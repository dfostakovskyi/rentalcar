---
---

# 🚗 RentalCar - Car Rental Platform

**RentalCar** is a modern web application for renting cars, allowing users to browse available vehicles, apply filters, and select their ideal car for rental.

## 🌟 Features

✅ **Browse Cars** – View a catalog of available rental cars.
✅ **Filtering System** – Search cars based on brand, price, mileage, and more.
✅ **Favorites** – Save your favorite vehicles for later.
✅ **Detailed Car Information** – View specifications, rental conditions, and company details.
✅ **Responsive Design** – Optimized for desktop and mobile users.
✅ **Booking Form** – Easily submit booking requests for selected cars.
✅ **Improved Accessibility** – Enhanced with visually hidden labels for screen readers.
✅ **Centralized State Management** – Utilizes Redux Toolkit for efficient state management.
✅ **Customizable Date Picker** – Features a `react-datepicker` with a custom three-letter day name format.
✅ **Asynchronous Booking Simulation** – Demonstrates booking request handling with simulated API calls.
✅ **Filter Persistence** – Filters are synchronized with Redux for a consistent user experience.
✅ **Efficient Filtering Logic** – Resets previous search results before applying new filters.

## 🛠 Tech Stack

- **Frontend:** React, Redux, React Router
- **Backend:** REST API (external car rental service)
- **Styling:** CSS Modules, Styled Components
- **State Management:** Redux Toolkit
- **Date Picker:** `react-datepicker`
- **Internationalization:** `date-fns` for custom locale

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/rentalcar.git](https://github.com/YOUR_GITHUB_USERNAME/rentalcar.git)
cd rentalcar
Replace YOUR_GITHUB_USERNAME with your actual GitHub username.

2️⃣ Install dependencies
Bash

npm install
3️⃣ Start the development server
Bash

npm run dev
The application will now run at http://localhost:5173/.

📂 Folder Structure
rentalcar/
├── src/
│   ├── components/
│   │   ├── BookingForm/
│   │   │   ├── BookingForm.jsx
│   │   │   └── BookingForm.module.css
│   │   ├── BookingSection/
│   │   │   ├── BookingSection.jsx
│   │   │   └── BookingSection.module.css
│   │   ├── CarCard/
│   │   │   ├── CarCard.jsx
│   │   │   └── CarCard.module.css
│   │   ├── CarData/
│   │   │   ├── CarData.jsx
│   │   │   └── CarData.module.css
│   │   ├── CarImage/
│   │   │   ├── CarImage.jsx
│   │   │   └── CarImage.module.css
│   │   ├── Filters/
│   │   │   ├── FilterBrand/
│   │   │   │   ├── FilterBrand.jsx
│   │   │   │   └── FilterBrand.module.css
│   │   │   ├── FilterMileage/
│   │   │   │   ├── FilterMileage.jsx
│   │   │   │   └── FilterMileage.module.css
│   │   │   ├── FilterPrice/
│   │   │   │   ├── FilterPrice.jsx
│   │   │   │   └── FilterPrice.module.css
│   │   │   ├── Filters.jsx
│   │   │   └── Filters.module.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   └── InformationSection/
│   │       ├── InformationSection.jsx
│   │       └── InformationSection.module.css
│   ├── hooks/
│   │   ├── useBookingFormValidation.js
│   │   ├── useBookingSubmit.js
│   │   ├── useFetchBrands.js
│   │   ├── useFetchCarDetails.js
│   │   └── useSyncFiltersWithRedux.js
│   ├── img/
│   │   └── Desktop/
│   │       ├── Hero.png
│   │       ├── Hero@2x.png
│   │       └── Hero@3x.png
│   ├── locales/
│   │   └── customEn.js
│   ├── pages/
│   │   ├── CarDetails/
│   │   │   ├── CarDetails.jsx
│   │   │   └── CarDetails.module.css
│   │   ├── Catalog/
│   │   │   ├── Catalog.jsx
│   │   │   └── Catalog.module.css
│   │   └── Home/
│   │       ├── Home.jsx
│   │       └── Home.module.css
│   ├── redux/
│   │   ├── middleware/
│   │   │   └── localStorageMiddleware.js
│   │   ├── slices/
│   │   │   ├── brandsSlice.js
│   │   │   ├── carsSlice.js
│   │   │   ├── favoritesSlice.js
│   │   │   ├── filtersSlice.js
│   │   │   └── oneCarSlice.js
│   │   └── store.js
│   ├── services/
│   │   ├── api.js
│   │   ├── bookingService.js
│   │   ├── format.js
│   │   └── localStorage.js
│   ├── utils/
│   │   ├── cleanFilters.js
│   │   ├── filterBrand.js
│   │   ├── filterMileage.js
│   │   ├── filterPrice.js
│   │   └── filterUtils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
└── README.md

## 🔗 API Integration

This project fetches car data from an external **Car Rental API**. Ensure API calls are properly configured in `src/services/api.js`. The booking functionality currently simulates successful submissions in the absence of a backend.

## 👏 Contributing

Feel free to fork the repository and submit pull requests with improvements!

## 📄 License

This project is licensed under the **MIT License**.

---
```
