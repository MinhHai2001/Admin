// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6wTEyBWqMmOdyt351gWX0KWJ_JwJJgac",
  authDomain: "doctor-home-1c0a5.firebaseapp.com",
  databaseURL: "https://doctor-home-1c0a5-default-rtdb.firebaseio.com",
  projectId: "doctor-home-1c0a5",
  storageBucket: "doctor-home-1c0a5.appspot.com",
  messagingSenderId: "299186204859",
  appId: "1:299186204859:web:482618bc0ebbff8617799e",
  measurementId: "G-CY3V1RZWK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);