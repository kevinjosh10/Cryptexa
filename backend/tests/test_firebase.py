import os
import unittest
from unittest.mock import patch

class TestFirebaseConfig(unittest.TestCase):
    @patch.dict(os.environ, {"FIREBASE_DATABASE_URL": "https://test.firebaseio.com"})
    def test_env_loading(self):
        self.assertEqual(os.getenv("FIREBASE_DATABASE_URL"), "https://test.firebaseio.com")

if __name__ == '__main__':
    unittest.main()
