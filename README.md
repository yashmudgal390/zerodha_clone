# Zerodha Clone - Full Stack Trading Platform

A modern, high-fidelity trading dashboard and landing page application inspired by Zerodha. This project features a robust authentication system, real-time-style data visualization, and a card-based dashboard for managing equity, holdings, and orders.

## 🚀 Project Overview

This is a multi-service application split into three main components:
- **Frontend (Landing Page):** User-facing landing pages, marketing sections, and authentication (Signup/Login) flow.
- **Dashboard (Trading App):** A protected, feature-rich interface for managing trades, viewing portfolios, and tracking market movements.
- **Backend (API):** A Node.js/Express server handling authentication (JWT), database operations (MongoDB), and order management.

## 🛠️ Technology Stack

- **Frontend:** React, React Router, Bootstrap, React-Toastify
- **Dashboard:** React, Material UI Icons, Chart.js, React-Cookie
- **Backend:** Node.js, Express, MongoDB, Mongoose, JSON Web Tokens (JWT), BcryptJS
- **Design:** Modern CSS3 (Inter Font, Flexbox/Grid Layouts, Card-based UI)

## 📁 Repository Structure

```text
Zerodha/
├── frontend/    # Landing pages & Auth (Port 3000)
├── dashboard/   # Main trading interface (Port 3001)
└── backend/     # API server & Database (Port 3002)
```

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB (Running locally or a Cloud Atlas URI)

### 1. Backend Setup
1. Navigate to the `backend` folder.
2. Create a `.env` file and add your credentials:
   ```env
   MONGO_URL=your_mongodb_connection_string
   PORT=3002
   TOKEN_KEY=your_secret_jwt_key
   ```
3. Install dependencies: `npm install`
4. Start the server: `npm start`

### 2. Frontend Setup
1. Navigate to the `frontend` folder.
2. Install dependencies: `npm install`
3. Start the landing page app: `npm start` (Runs on `http://localhost:3000`)

### 3. Dashboard Setup
1. Navigate to the `dashboard` folder.
2. Install dependencies: `npm install`
3. Start the dashboard app: `npm start` (Runs on `http://localhost:3001`)

## ✨ Key Features

- **JWT Authentication:** Secure signup and login flow with session persistence across landing page and dashboard.
- **Modern Dashboard UI:** Card-based layout with a 3-column equity grid and integrated portfolio summaries.
- **Watchlist sidebar:** Integrated stock tracker with hover effects, accent bars, and color-coded volatility indicators.
- **Orders Management:** Full CRUD functionality to place and cancel stock orders.
- **Responsive Design:** Premium "Inter" font integration and balance layout for high-density information display.
- **Data Visualization:** Portfolio allocation insights using Doughnut charts (Chart.js).

## 🛡️ License
This project is open-source and available under the [MIT License](LICENSE).
