// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_eu6xJJdcI-agc7C1ykyLgWjVmIOb7ns",
  authDomain: "vite-project-c1056.firebaseapp.com",
  projectId: "vite-project-c1056",
  storageBucket: "vite-project-c1056.firebasestorage.app",
  messagingSenderId: "493116925184",
  appId: "1:493116925184:web:9744fdd539d71b495f3fe5",
  measurementId: "G-DHDDPDR6N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()