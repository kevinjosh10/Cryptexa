<div align="center">
  
  # 🔮 Cryptexa: Decoding Market Manipulation
  
  **A real-time, algorithmic trend intelligence system designed to protect retail investors from exit liquidity traps by mathematically separating verifiable on-chain volume from social media hype.**

  ![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
  ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
  ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

</div>

---

## 🛑 The Problem: The "Exit Liquidity" Trap
Cryptocurrency markets are heavily driven by algorithmic bot manipulation and artificial social media euphoria. Retail investors frequently buy assets at local highs ("FOMO") due to hype, only to be dumped on by institutional whales ("Smart Money"). Existing crypto trackers only display *what* the price is doing, failing to explain *why*.

## ✅ The Solution: The Reality Score
Cryptexa is a visual forensics terminal. It calculates a proprietary **Reality Score (0-100)** by aggressively contrasting an asset's actual on-chain volume and price strength against its social media hype index. 
If Hype massively outweighs Volume, the system flashes a **🔴 RED (AVOID)** signal, alerting the user to an imminent pump-and-dump. 

---

## 🔥 Core Features

- 📊 **Intelligent Dashboard:** A live grid tracking cryptocurrencies in real-time using the **CoinGecko API**. Features instant algorithmic BUY/WATCH/AVOID signals and 7D Sparkline momentum graphs.
- 🔬 **The Coin Lab (Deep Dive):** Renders a dual-axis divergence chart plotting Price Strength against Social Hype, exposing "Wash Trading" and "Spoofing" fingerprints.
- 🕹️ **Manipulation Simulators:** Interactive "What-If" sliders allow users to manually pump Hype or crash Volume to see exactly how algorithms detect market manipulation in real-time.
- ⏳ **Time Travel Backtesting:** Proves the algorithm's validity by passing historical black swan events (e.g., the 2022 Terra/Luna $40B collapse) through the Reality Score engine.
- 🧠 **Insights Lab:** Visualizes macro market psychology through an 'Attention Gravity Map' (Bubble Chart), a 'Crowd Madness Index' (Fear & Greed Gauge), and an 'Intelligence Matrix' (Radar Chart).
- 🛡️ **Risk/Reward Manager:** A professional trading tool forcing users into mathematical safety by calculating exact portfolio position sizing based on strict R/R ratios.

---

## 🛠️ Tech Stack & Architecture

Cryptexa is built for absolute maximum performance, rendering complex 60fps animations dynamically without relying on bloated frontend frameworks. 

### Frontend (The Client)
- **100% Vanilla JavaScript:** Direct DOM manipulation and encapsulation inside a global `CX` state manager for zero-latency UI updates.
- **Custom CSS / Glassmorphism:** Designed completely from scratch using native CSS `:root` variables.
- **Chart.js:** Handling instantaneous geometric rendering of Line, Radar, Bubble, and Doughnut charts.

### Backend (The Pipeline)
- **Firebase Realtime Database:** A serverless NoSQL cloud database syncing data to the client instantly via WebSockets.
- **Python Admin SDK:** A secure `backend.py` and `upload_csv.py` environment used for heavy lifting (e.g., parsing massive 3,000+ Meme Coin CSV datasets from Kaggle into JSON and blasting them to Firebase).
- **`python-dotenv`:** Strict security protocol ensuring Firebase Admin Service Account keys are never committed to the source code.

---

## 🚀 Installation & Local Setup

### 1. The Frontend (Standard Install)
Because the frontend is pure HTML/JS/CSS, no build tools or package managers are required!
1. Clone the repository.
2. Open `index.html` in your browser (or use VS Code Live Server).
3. The app is live!

### 2. The Python Backend (Optional Firebase Sync)
If you wish to use the Python backend to upload the Solana Memecoin dataset or run custom server-side analytics:
1. Ensure Python 3.9+ is installed.
2. Install the required dependencies:
   ```bash
   pip install firebase-admin python-dotenv pandas
   ```
3. Look inside the `.env` file and ensure your Firebase Admin secrets are securely pasted inside.
4. Run the upload script to parse the Kaggle CSV and populate your Realtime Database:
   ```bash
   python upload_csv.py
   ```
5. Open your `index.html` file. Wait 5 seconds, and watch the console. The frontend's background listener will automatically catch the newly uploaded Memecoins from Firebase!

---

<div align="center">
  <i>Built to decode the noise. Trade on Reality.</i>
</div>
