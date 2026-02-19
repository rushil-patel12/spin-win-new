// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeKaMFNyRQbXIY5zxu7RJi5zKTucBzS2s",
  authDomain: "spin-win-prospera.firebaseapp.com",
  projectId: "spin-win-prospera",
  storageBucket: "spin-win-prospera.firebasestorage.app",
  messagingSenderId: "34159506092",
  appId: "1:34159506092:web:73bf5c9037c40f0ac46509"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
