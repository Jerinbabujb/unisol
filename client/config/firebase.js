// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-HbEM81oZTZqP-fXaGSFATkG-MzwQNx0",
  authDomain: "unisoul-9d02c.firebaseapp.com",
  projectId: "unisoul-9d02c",
  storageBucket: "unisoul-9d02c.firebasestorage.app",
  messagingSenderId: "351571482378",
  appId: "1:351571482378:web:3e1f67738ce631df2e4cf3",
  measurementId: "G-CXJ1WWHN18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();