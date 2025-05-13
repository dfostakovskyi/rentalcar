
---

# 🚗 RentalCar - Car Rental Platform  

**RentalCar** is a modern web application for renting cars, allowing users to browse available vehicles, apply filters, and select their ideal car for rental.  

## 🌟 Features  
✅ **Browse Cars** – View a catalog of available rental cars.  
✅ **Filtering System** – Search cars based on brand, price, mileage, and more.  
✅ **Favorites** – Save your favorite vehicles for later.  
✅ **Detailed Car Information** – View specifications, rental conditions, and company details.  
✅ **Responsive Design** – Optimized for desktop and mobile users.  

## 🛠 Tech Stack  
- **Frontend:** React, Redux, React Router  
- **Backend:** REST API (external car rental service)  
- **Styling:** CSS Modules, Styled Components  
- **State Management:** Redux Toolkit  

## 🚀 Installation & Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/rentalcar.git
cd rentalcar
```
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### 2️⃣ Install dependencies  
```bash
npm install
```

### 3️⃣ Start the development server  
```bash
npm run dev
```
The application will now run at `http://localhost:5173/`.  

## 📂 Folder Structure  
```
rentalcar/
src/
┣ components/
┃ ┣ CarCard/
┃ ┃ ┗ CarCard.jsx
┃ ┣ Header/
┃ ┃ ┣ Header.jsx
┃ ┃ ┗ Header.module.css
┃ ┣ Button.jsx
┃ ┗ Filters.jsx
┣ pages/
┃ ┣ CarDetails/
┃ ┃ ┗ CarDetails.jsx
┃ ┣ Catalog/
┃ ┃ ┗ Catalog.jsx
┃ ┗ Home/
┃   ┣ Home.jsx
┃   ┗ Home.module.css
┣ redux/
┃ ┣ middleware/
┃ ┃ ┗ localStorageMiddleware.js
┃ ┣ slices/
┃ ┃ ┣ brandsSlice.js
┃ ┃ ┣ carsSlice.js
┃ ┃ ┣ favoritesSlice.js
┃ ┃ ┣ filtersSlice.js
┃ ┃ ┗ oneCarSlice.js
┃ ┗ store.js
┣ services/
┃ ┣ api.js
┃ ┣ bookingService.js
┃ ┣ format.js
┃ ┗ localStorage.js
┣ styles/
┣ App.jsx
┣ counter.js
┣ index.js
┣ javascript.svg
┣ main.jsx
┗ style.css
public/
┣ assets/
┃ ┣ favicon_io/
┃ ┃ ┣ android-chrome-192x192.png
┃ ┃ ┣ android-chrome-512x512.png
┃ ┃ ┣ apple-touch-icon.png
┃ ┃ ┣ favicon-16x16.png
┃ ┃ ┣ favicon-32x32.png
┃ ┃ ┣ favicon.ico
┃ ┃ ┗ site.webmanifest
┃ ┗ sprite.svg
┗ vite.svg
```

## 🔗 API Integration  
This project fetches car data from an external **Car Rental API**. Ensure API calls are properly configured in `src/services/api.js`.  

## 👏 Contributing  
Feel free to fork the repository and submit pull requests with improvements!  

## 📄 License  
This project is licensed under the **MIT License**.  

---
