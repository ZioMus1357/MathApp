// src/firebaseConfig.ts
// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzriBcFOcpNGnCVtuh5gS0jdb7MunDhJ4",
  authDomain: "mathapp-71330.firebaseapp.com",
  projectId: "mathapp-71330",
  storageBucket: "mathapp-71330.firebasestorage.app",
  messagingSenderId: "479892016265",
  appId: "1:479892016265:web:804bc31d73dd4aecf70a58",
  measurementId: "G-Q2P058RS4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);