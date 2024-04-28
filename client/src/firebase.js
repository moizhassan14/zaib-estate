// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zaib-estate.firebaseapp.com",
  projectId: "zaib-estate",
  storageBucket: "zaib-estate.appspot.com",
  messagingSenderId: "339991483347",
  appId: "1:339991483347:web:f944ac38313bb7e914d526"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);