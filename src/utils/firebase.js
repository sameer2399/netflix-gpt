// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu7UwBLECh-ocW5bIP-GK1-tRc2mFefOs",
  authDomain: "netflixgpt-cc6d4.firebaseapp.com",
  projectId: "netflixgpt-cc6d4",
  storageBucket: "netflixgpt-cc6d4.appspot.com",
  messagingSenderId: "9597455463",
  appId: "1:9597455463:web:6fd1dd18065b5321ac58c2",
  measurementId: "G-G695M73NH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();