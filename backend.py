import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import os
from dotenv import load_dotenv

# Load secret environment variables from .env
load_dotenv()

# Build the credentials dictionary exclusively from environment variables
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
    # Initialize the app with a service account & Realtime DB URL
    cred = credentials.Certificate(cred_dict)
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://cryptexa-9cbaf-default-rtdb.firebaseio.com' 
    })

    print("Firebase Admin successfully initialized securely from .env!")
    
    # Future backend logic:
    # 1. Listen for new analytical data
    # 2. Authenticate users
    
    # Example of writing to Realtime Database:
    # ref = db.reference('coins/btc')
    # ref.set({
    #     'name': 'Bitcoin',
    #     'realityScore': 85
    # })
except Exception as e:
    print(f"Error initializing Firebase: {e}\nDid you 'pip install python-dotenv'?")
