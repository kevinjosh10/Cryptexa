<div align="center">
  <img src="https://img.icons8.com/?size=100&id=64835&format=png&color=000000" alt="Cryptexa Logo" width="80" height="80">
  <h1 align="center">Cryptexa</h1>
  <p align="center">
    <strong>Market Manipulation & Trend Intelligence System</strong>
  </p>
  <p align="center">
    A professional, full-stack intelligence platform that decodes hype, exposes market manipulation, and tracks real-time cryptocurrency divergence using CoinGecko and Firebase.
  </p>

  <p align="center">
    <a href="#features">Features</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#installation">Installation</a> •
    <a href="#security">Security</a> •
    <a href="#technologies">Technologies</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  </p>
</div>

---

## ⚡ Overview

**Cryptexa** is an advanced market intelligence dashboard designed to separate genuine crypto market momentum from artificial social media hype. It uses an algorithmic **Reality Score** to warn traders about imminent pump-and-dump schemes, tracks hidden gems, and simulates market conditions.

This repository features a **modular full-stack architecture**, cleanly separating the vanilla JavaScript frontend from the Python data pipeline backend.

## 🚀 Key Features

*   **Real-time Intelligence Matrix:** Tracks 18 leading assets with live price feeds via the CoinGecko API.
*   **Reality Score Engine:** Computes a unique metric based on the divergence between *Price Strength* and *Social Hype Intensity*.
*   **Manipulation Lab:** Features a "What-If Simulator" allowing users to adjust volume, whale activity, and hype to model outcomes.
*   **Historical Time Travel:** Analyze past market anomalies (e.g., 2021 Bull Run, 2022 Terra Crash) to validate trading models.
*   **Trading Tools:** Includes an integrated RSI Calculator, Risk/Reward position sizer, and side-by-side coin comparison mode.
*   **Dark Mode Glassmorphic UI:** A premium, fully responsive interface featuring CSS micro-animations and Chart.js visualizations.

---

## 🏗️ Architecture & Project Structure

The project has been refactored into a scalable, production-ready structure:

```text
Cryptexa/
├── frontend/                  # Web Client (Vanilla JS, HTML, CSS)
│   ├── index.html             # Application entry point
│   ├── env.example.js         # Template for frontend secrets
│   ├── css/
│   │   └── style.css          # Core styles & Glassmorphism UI
│   └── js/
│       └── main.js            # Unified logic, Chart configurations, and API controllers
│
├── backend/                   # Python Data Pipeline
│   ├── .env.example           # Template for backend secrets
│   ├── requirements.txt       # Python dependencies
│   ├── src/
│   │   ├── main.py            # Firebase admin initialization
│   │   ├── upload_csv.py      # Utility to sync local CSVs to Realtime Database
│   │   └── extract_assets.py  # Image extraction utility
│   └── tests/
│       └── test_firebase.py   # Unit tests for backend services
│
├── docs/                      # Documentation
│   └── database_schema.json   # Firebase schema structure
│
└── .gitignore                 # Security exclusion file
```

---

## 🛠️ Installation & Setup

### 1. Frontend Setup
1. Navigate to the `frontend/` directory.
2. Duplicate `env.example.js` and rename it to `env.js`.
3. Fill in your CoinGecko API key and Firebase configuration in `env.js`.
4. Serve the `frontend/` directory using any local web server (e.g., Live Server or Python HTTP Server):
   ```bash
   python -m http.server 3000
   ```

### 2. Backend Setup
1. Navigate to the `backend/` directory.
2. Install the required Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Create a `.env` file based on `.env.example` and add your Firebase credentials.
4. Place your Firebase service account key inside the `backend/` folder (name it `firebase_credentials.json`).
5. Run the CSV upload script to sync your market data to Firebase:
   ```bash
   cd src/
   python upload_csv.py
   ```

---

## 🔐 Security & Best Practices

This project adheres to strict security standards:
*   **Zero Hardcoded Secrets:** All API keys and Database URLs have been stripped from the codebase and moved to environment variables (`.env` and `env.js`).
*   **Secure `.gitignore`:** Prevents accidental commits of `firebase_credentials.json`, `.env`, and `env.js` files.
*   **Modular Architecture:** Clean separation of frontend UI state and backend Python services.

---

## 💻 Technologies Used

*   **Frontend:** HTML5, Vanilla CSS3, Vanilla JavaScript (ES6+).
*   **Libraries:** Chart.js (Data Visualization).
*   **Backend:** Python 3, `firebase-admin`, `pandas`, `python-dotenv`.
*   **Database:** Firebase Realtime Database.
*   **APIs:** CoinGecko V3, Alternative.me (Fear & Greed Index).

---

<div align="center">
  <p>Designed and built for traders who want to see past the noise.</p>
</div>
