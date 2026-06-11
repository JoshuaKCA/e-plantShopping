# Paradise Nursery - E-Plant Shopping App

A responsive e-commerce web application built with **React** and **Redux** that allows users to browse a collection of indoor plants, add them to a shopping cart, and manage their plant collection dynamically.

## 🌿 Project Overview

Paradise Nursery is designed to bring nature closer to home. This application features a clean, user-friendly interface for plant enthusiasts to explore categories such as air-purifying, aromatic, and medicinal plants, while ensuring a seamless shopping experience using centralized state management.

## ✨ Key Features

* **Interactive Product Catalog:** View plants categorized by type with detailed descriptions and pricing.
* **Shopping Cart Management:** Add items to your cart, update quantities, or remove items entirely.
* **Dynamic Cart Totals:** Real-time calculation of sub-totals and the overall total cart amount.
* **Global State Management:** Uses **Redux Toolkit** to handle cart state globally, ensuring data synchronization across the entire application.
* **Responsive Design:** Optimized for a smooth experience across different screen sizes.

## 🛠️ Technologies Used

* **Frontend:** React.js
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
* **Styling:** CSS3
* **Build Tool:** Vite

## 📁 Project Structure

* `src/App.jsx`: The root component managing the application layout.
* `src/ProductList.jsx`: The main catalog page where users browse and add plants.
* `src/CartItem.jsx`: The component responsible for displaying cart contents and managing item quantities.
* `src/CartSlice.jsx`: The Redux slice defining the logic for adding, removing, and updating items in the cart.
* `src/store.js`: The central Redux store configuration.

## 🚀 How to Run Locally

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/e-plant-shopping.git

```


2. **Navigate to the project directory**
```bash
cd e-plant-shopping

```


3. **Install dependencies**
```bash
npm install

```


4. **Start the development server**
```bash
npm run dev

```


5. **View the App**
Open the local URL provided in your terminal (typically `http://localhost:5173`) in your web browser.

## 💡 Acknowledgments

* This project was developed as part of a hands-on lab on React and Redux state management.
* Plant images and assets provided by Pixabay and Unsplash.

## 📝 License

This project is licensed under the Apache 2.0 License.

---

### 💡 Pro-Tip for GitHub

To make your README look even more professional:

1. **Add a screenshot:** Take a clear screenshot of your "Paradise Nursery" homepage. Save it as `screenshot.png` in your root folder.
2. **Update the README:** Add this line right under the "Project Overview" section to display the image:
`![Paradise Nursery Preview](screenshot.png)`
3. **Commit and Push:** Once you save the `README.md` and your image, run:
```bash
git add .
git commit -m "Added professional README and project preview"
git push origin main

```
