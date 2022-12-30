// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE0cs1P2QaMBf3Ty3xbPNUuwJuEkxsVMQ",
  authDomain: "poc-wrthy.firebaseapp.com",
  projectId: "poc-wrthy",
  storageBucket: "poc-wrthy.appspot.com",
  messagingSenderId: "410980976305",
  appId: "1:410980976305:web:a8addbc908882c59bd8490",
  measurementId: "G-J6JZ7JVH7S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);