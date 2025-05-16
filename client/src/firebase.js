// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2f827.firebaseapp.com",
  projectId: "mern-auth-2f827",
  storageBucket: "mern-auth-2f827.firebasestorage.app",
  messagingSenderId: "762031414121",
  appId: "1:762031414121:web:9cc79e711a07c38bc53bf8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
