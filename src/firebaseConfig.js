// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJN3a9a4qxjJcxnHm_9cfiFLzoLZ2mkw8",
  authDomain: "ee3070-8a9f4.firebaseapp.com",
  projectId: "ee3070-8a9f4",
  storageBucket: "ee3070-8a9f4.appspot.com",
  messagingSenderId: "808891835863",
  appId: "1:808891835863:web:aad9c27125b5b21e85d792",
  measurementId: "G-F2XZ22ZDRF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
