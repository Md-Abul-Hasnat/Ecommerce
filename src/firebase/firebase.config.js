import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVI07PRajX5rxtR2ETZdrEUfIJ9J7sAhE",
  authDomain: "ecommerce-fd476.firebaseapp.com",
  projectId: "ecommerce-fd476",
  storageBucket: "ecommerce-fd476.appspot.com",
  messagingSenderId: "102443194574",
  appId: "1:102443194574:web:05c9b976c751571549589f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
