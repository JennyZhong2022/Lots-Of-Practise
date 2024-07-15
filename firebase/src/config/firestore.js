// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEQqJQ7IxJjHxfR06P8KPeo49ox92v5bs",
  authDomain: "test1-c0ec5.firebaseapp.com",
  projectId: "test1-c0ec5",
  storageBucket: "test1-c0ec5.appspot.com",
  messagingSenderId: "1002065573601",
  appId: "1:1002065573601:web:d0ef8469deb2a04762e9a0",
  measurementId: "G-S80HR2R0B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)