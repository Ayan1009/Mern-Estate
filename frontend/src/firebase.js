// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-633f4.firebaseapp.com",
  projectId: "real-estate-633f4",
  storageBucket: "real-estate-633f4.firebasestorage.app",
  messagingSenderId: "419846211600",
  appId: "1:419846211600:web:5f541594cbd7424e92e295"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);