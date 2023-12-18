// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6501a.firebaseapp.com",
  projectId: "mern-auth-6501a",
  storageBucket: "mern-auth-6501a.appspot.com",
  messagingSenderId: "958536204504",
  appId: "1:958536204504:web:586bb7f0f005c394bb97ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);