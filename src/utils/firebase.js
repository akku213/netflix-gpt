// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBicF3Ic6yRoRJhKCFlDGFCiLuo90du9JA",
  authDomain: "netflixgpt-1df77.firebaseapp.com",
  projectId: "netflixgpt-1df77",
  storageBucket: "netflixgpt-1df77.appspot.com",
  messagingSenderId: "626924395454",
  appId: "1:626924395454:web:94264a0b5edd5094e037ef",
  measurementId: "G-L8825FMNJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
