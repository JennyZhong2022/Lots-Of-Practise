// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyB6La4fnsSGUBKsZHTrtUjzHRIq-T54icI",
  authDomain: "pokemon-b3b95.firebaseapp.com",
  projectId: "pokemon-b3b95",
  storageBucket: "pokemon-b3b95.appspot.com",
  messagingSenderId: "764012126374",
  appId: "1:764012126374:web:a3cd1c2b99cfd54d785467",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
