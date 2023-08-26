// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCXv97AEHchDiEIWjcZtrWVi_7QOgfq4I",
  authDomain: "ship-swiftly.firebaseapp.com",
  projectId: "ship-swiftly",
  storageBucket: "ship-swiftly.appspot.com",
  messagingSenderId: "1059212593403",
  appId: "1:1059212593403:web:5c49246147e3b29e70885e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;