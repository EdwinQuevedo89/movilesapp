import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA5YqN0rQqoahKLkm-15ITb8n99fSBXRfM",
  authDomain: "my-proyecto3.firebaseapp.com",
  databaseURL: "https://my-proyecto3-default-rtdb.firebaseio.com",
  projectId: "my-proyecto3",
  storageBucket: "my-proyecto3.firebasestorage.app",
  messagingSenderId: "831267839516",
  appId: "1:831267839516:web:f5f8bd5781993c994c49d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);