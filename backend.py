import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import os

# Ensure the credentials file exists
cred_path = 'firebase_credentials.json'

if os.path.exists(cred_path):
    # Initialize the app with a service account & Realtime DB URL
    cred = credentials.Certificate(cred_path)
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://cryptexa-9cbaf-default-rtdb.firebaseio.com' 
    })

    print("Firebase Admin successfully initialized with Realtime Database!")
    
    # Future backend logic:
    # 1. Listen for new analytical data
    # 2. Authenticate users
    
    # Example of writing to Realtime Database:
    # ref = db.reference('coins/btc')
    # ref.set({
    #     'name': 'Bitcoin',
    #     'realityScore': 85
    # })
else:
    print(f"Error: {cred_path} not found.")
