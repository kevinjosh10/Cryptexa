import firebase_admin
from firebase_admin import credentials, db
import pandas as pd
import os
from dotenv import load_dotenv

# 1. Securely connect to your Database
load_dotenv()
cred_dict = {
    "type": "service_account",
    "project_id": os.getenv("FIREBASE_PROJECT_ID"),
    "private_key_id": os.getenv("FIREBASE_PRIVATE_KEY_ID"),
    "private_key": os.getenv("FIREBASE_PRIVATE_KEY", "").replace('\\n', '\n'),
    "client_email": os.getenv("FIREBASE_CLIENT_EMAIL"),
    "client_id": os.getenv("FIREBASE_CLIENT_ID"),
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": f"https://www.googleapis.com/robot/v1/metadata/x509/{os.getenv('FIREBASE_CLIENT_EMAIL', '').replace('@', '%40')}",
    "universe_domain": "googleapis.com"
}

try:
    cred = credentials.Certificate(cred_dict)
    firebase_admin.initialize_app(cred, {
        'databaseURL': os.getenv('FIREBASE_DATABASE_URL')
    })
    
    # 2. Read the CSV file you downloaded from Kaggle (you will need to run: pip install pandas)
    csv_file = "Meme_Coins_Solana_3000.csv"
    
    if not os.path.exists(csv_file):
        print(f"Error: Could not find {csv_file}. Please make sure you downloaded the archive.zip from Kaggle, extracted the CSV, and placed it in this folder!")
    else:
        df = pd.read_csv(csv_file)
        
        # 3. Convert it into a clean JSON dictionary format that Firebase loves
        formatted_data = {}
        processed = 0
        for index, row in df.iterrows():
            if pd.isna(row['Symbol']) or pd.isna(row['Coin Name']):
                continue
                
            symbol = str(row['Symbol']).lower()
            
            formatted_data[symbol] = {
                "name": str(row['Coin Name']),
                "price": float(row['Current Price (USD)']) if pd.notna(row['Current Price (USD)']) else 0.0,
                "marketCap": float(row['Market Cap (USD)']) if pd.notna(row['Market Cap (USD)']) else 0.0,
                "volume24h": float(row['Trading Volume (24h)']) if pd.notna(row['Trading Volume (24h)']) else 0.0,
                "liquidity": float(row['Token Liquidity (USD)']) if pd.notna(row['Token Liquidity (USD)']) else 0.0,
                # Generate a simulated hype score out of 100 based on trading volume for the prototype
                "hype": min(100, int(float(row['Trading Volume (24h)']) / 1000000)) if pd.notna(row['Trading Volume (24h)']) else 50
            }
            processed += 1
            if processed >= 500: # Limit to 500 so we don't overwhelm the free Firebase tier instantly
                break

        # 4. Push it to Firebase!
        print(f"Uploading {processed} Solana Meme Coins to Firebase...")
        db.reference('solana_memecoins').set(formatted_data)
        print("Upload Complete! Go check your Firebase Console!")

except Exception as e:
    print(f"Error initializing Firebase or parsing CSV: {e}\nDid you 'pip install python-dotenv pandas'?")
